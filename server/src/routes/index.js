const ProductRoutes = require("./shared/ProductRoutes");
const AuthRoutes = require("./shared/AuthRoutes");

const routes = (app) => {
  // shared router
  app.use("/api/shared", ProductRoutes);
  app.use("/api/auth", AuthRoutes);

  //   customer router

  // admin router

  // vendor router
};

module.exports = routes;
