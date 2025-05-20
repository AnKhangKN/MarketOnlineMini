const Product = require("../../models/Product");

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
      message: error.message || "Lỗi server",
    };
  }
};

module.exports = {
  getAllProducts,
};
