import Cart from "~/models/cart.model";
import { factory } from "./handlerFactory";
import AppError from "~/utils/AppError";
import { populate } from "dotenv";

const getCart = async (req) => {
  let query = Cart.findOne({ cart_userId: req.params.id });
  const doc = await query.populate({
    path: "cart_products.productId",
    select: "name price thumbs",
  });
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: doc.cart_products,
  };
};
const createCart = async (req) => {
  const { cart_userId, productId, quantity } = req.body;
  let cart;

  const existingCart = await Cart.findOne({ cart_userId });

  if (!existingCart) {
    cart = new Cart({
      cart_userId,
      cart_products: [{ productId, quantity }],
    });
  } else {
    const existingProductIndex = existingCart.cart_products.findIndex(
      (product) => product.productId.equals(productId)
    );

    if (existingProductIndex !== -1) {
      existingCart.cart_products[existingProductIndex].quantity += quantity;
    } else {
      existingCart.cart_products.push({ productId, quantity });
    }

    cart = await existingCart.save();
  }

  await cart.save();
  await cart.populate({
    path: "cart_products.productId",
    model: "Product",
  });
  return cart;
};
const getAllCart = factory.getAll(Cart);
const updateCart = async (req) => {
  let cart;
  const { cart_userId, productId, quantity } = req.body;
  console.log(cart_userId);
  const existingCart = await Cart.findOne({ cart_userId: cart_userId });
  console.log(existingCart);
  const existingProductIndex = existingCart.cart_products.findIndex((product) =>
    product.productId.equals(productId)
  );
  if (existingProductIndex !== -1) {
    existingCart.cart_products[existingProductIndex].quantity = quantity;
  }

  cart = await existingCart.save();
  await cart.save();
  return cart;
};
const deleteProductInCart = async (req) => {
  const productId = req.body.productId;
  const cart = await Cart.findOneAndUpdate(
    { cart_userId: req.params.id },
    { $pull: { cart_products: { productId: productId } } },
    { new: true }
  );
  return cart.cart_products;
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
