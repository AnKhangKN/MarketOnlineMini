const Product = require("../../models/Product");

const createProduct = async (data) => {
  try {

    const data = await Product.createProduct();

    return {
      status: "OK",
      message: "Tạo sản phẩm thành công",
      data: data,
    };

  } catch (error) {
    throw {
      message: error.message || "Internal Server Error",
    };
  }
}

const getAllProducts = async () => {
  try {
    const data = await Product.find();

    return {
      status: "OK",
      message: "Lấy thành công danh sách sản phẩm",
      data: data,
    };
  } catch (error) {
    throw {
      message: error.message || "Internal Server Error",
    };
  }
};

module.exports = {
  getAllProducts,
  createProduct
};
