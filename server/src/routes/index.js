const ProductRoutes = require("./shared/ProductRoutes");

const routes = (app) => {
  // shared router
  app.use("/api/shared", ProductRoutes);

  //   customer router

  // admin router

  // vendor router
};

module.exports = routes;
