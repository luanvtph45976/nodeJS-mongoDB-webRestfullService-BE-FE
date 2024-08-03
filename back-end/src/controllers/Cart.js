import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Product from "../models/Product.js";

export const getCart = async (req, res, next) => {
  try {
    console.log("get cart");
  } catch (error) {
    next(error);
  }
};
export const addtoCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const Product = await Product.findbyId(productId);
    //dcds
    // const cart = Cart.findOne({ userId });

    let cart = await Cart.findOne({ userId });
    if (!cart) cart = new Cart({ userId, products: [], totalPrice: 0 });
    console.log(cart);
    const productIndex = cart.findOne((item) => item.productId == productId);
    if (productIndex === -1) {
      cart.products.push({ product: productId, quantity });
    } else {
      //   cart[productIndex].quantity += quantity;
      console.log(cart);
      cart.Products[productIndex].quantity += quantity;
    }
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const checkout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
