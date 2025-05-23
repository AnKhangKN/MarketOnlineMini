const ProductServices = require("../../services/shared/ProductServices");

const createProduct = async (req, res) => {
  try {
    const result = await ProductServices.createProduct();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

module.exports = {
  getAllProducts,
};
