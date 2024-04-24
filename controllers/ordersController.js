const orderModel = require("../models/ordersModel");
// const getAllOrders = async (req, res) => {
//   try {
//     const data = await orderModel.find();
//     res.json({
//       status: "success",
//       results: 0,
//       data: {
//         products: data,
//       },
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// const addProduct = async (req, res) => {
//   // Instead of validating here, it is better to equip schema to use built-in validation
//   // use exception handling here
//   try {
//     const { _id, ...data } = await productModel.create(req.body);
//     res.json({
//       status: "success",
//       results: 0,
//       message: "Product successfully added!",
//       data: data,
//     });
//   } catch (err) {
//     res.status(500);
//     console.log(err.message, "Oops! You missed out some details!");
//     res.json({
//       status: "fail",
//       message: "Price or Title missing",
//     });
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     const reqId = req.params.id;
//     const data = req.body;
//     const result = await productModel.findOneAndUpdate({ _id: reqId }, data);
//     res.json({
//       status: "success",
//       results: 0,
//       message: "Product successfully Updated!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500);
//     console.log(err.message, "You missed this!");
//     res.json({
//       status: "fail",
//       message: "Couldn't Update! Record not exits!",
//     });
//   }
// };

// const replaceProduct = async (req, res) => {
//   try {
//     const reqId = req.params.id;
//     const data = { ...req.body, _id: reqId };
//     const result = await productModel.findOneAndReplace({ _id: reqId }, data);
//     res.json({
//       status: "success",
//       results: 0,
//       message: "Successfully replaced the product",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500);
//     console.log(err.message, "You missed this!");
//     res.json({
//       status: "fail",
//       message: "Couldn't find record to replace!",
//     });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const reqId = req.params.id;
//     const result = await productModel.findOneAndDelete({ _id: reqId });
//     res.json({
//       status: "success",
//       results: 0,
//       message: "Successfully deleted the product!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500);
//     console.log(err.message, "Product Not exists!");
//     res.json({
//       status: "fail",
//       message: "Couldn't find record to delete!",
//     });
//   }
// };
// module.exports = {
//   getAllProducts,
//   addProduct,
//   updateProduct,
//   replaceProduct,
//   deleteProduct,
// };

const getAllOrders = (req, res) => {
  try {
    res.json({
      status: "success",
      message: "Successfully fetched all orders",
    });
  } catch (err) {
    console.log(err.message);
    res.json({});
  }
};

const addOrder = (req, res) => {};
const updateOrder = (req, res) => {};
const replaceOrder = (req, res) => {};
const cancelOrder = (req, res) => {};

module.exports = {
  getAllOrders,
  addOrder,
  updateOrder,
  replaceOrder,
  cancelOrder, // deleteOrder
};
