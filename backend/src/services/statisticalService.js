import SupplierInvoice from "~/models/supplierInvoice.model";

import Payment from "~/models/payment.model";

const getTotalAmount = async (req) => {
  const resultPayment = await Payment.aggregate([
    {
      $match: {
        state: "completed",
        paid: true,
      },
    },
    {
      $group: {
        _id: null,
        totalSales: { $sum: "$total_amount" },
      },
    },
  ]);

  const totalSales = resultPayment.length > 0 ? resultPayment[0].totalSales : 0;

  const resultImport = await SupplierInvoice.aggregate([
    {
      $group: {
        _id: null,
        totalImportAmount: { $sum: "$total_amount" },
      },
    },
  ]);

  const totalImportAmount =
    resultImport.length > 0 ? resultImport[0].totalImportAmount : 0;
  return {
    payment: totalSales,
    import: totalImportAmount,
  };
};

const getMonthlyRevenue = async (req) => {
  const year = req.params.year;
  const payments = await Payment.aggregate([
    {
      $match: {
        state: "completed",
        paid: true,
        createdAt: {
          $gte: new Date(`${year}-01-01`),
          $lt: new Date(`${year + 1}-01-01`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$createdAt" },
        totalRevenue: { $sum: "$total_amount" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const supplierInvoices = await SupplierInvoice.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${year}-01-01`),
          $lt: new Date(`${year + 1}-01-01`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$createdAt" },
        totalExpense: { $sum: "$total_amount" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const financeByMonth = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const revenueData = payments.find((p) => p._id === month);
    const expenseData = supplierInvoices.find((s) => s._id === month);
    return {
      name: new Date(0, month - 1).toLocaleString("default", {
        month: "short",
      }), // Tên tháng
      revenue: revenueData ? revenueData.totalRevenue : 0,
      expense: expenseData ? expenseData.totalExpense : 0,
    };
  });

  return financeByMonth;
};
export const statisticalService = {
  getTotalAmount,
  getMonthlyRevenue,
};
