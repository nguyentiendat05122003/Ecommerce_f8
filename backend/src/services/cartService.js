import Cart from "~/models/cart.model";
import { factory } from "./handlerFactory";

const getCart = async (req) => {
  let query = Cart.find({ cart_userId: req.params.id });
  const doc = await query;
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: doc,
  };
};
const createCart = async (req) => {
  const { cart_userId, productId, quantity } = req.body;
  let cart;
  const carts = await Cart.find({ cart_userId: cart_userId });
  if (carts.length === 0) {
    cart = new Cart({
      cart_userId,
      cart_products: [{ productId: productId, quantity }],
    });
  } else {
    cart = await Cart.findOneAndUpdate(
      { "cart_products.productId": productId },
      { $inc: { "cart_products.$.quantity": quantity } },
      { new: true }
    );
  }
  await cart.save();
  return cart;
};
const getAllCart = factory.getAll(Cart);
const updateCart = async (req) => {};
const deleteProductInCart = async (req) => {
  const productId = req.body.productId;
  await Cart.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { cart_products: { productId: productId } } },
    { new: true }
  );
  return {
    data: null,
  };
};
const deleteOneCart = factory.deleteOne(Cart);

export const cartService = {
  getCart,
  getAllCart,
  updateCart,
  deleteOneCart,
  createCart,
  deleteProductInCart,
};
