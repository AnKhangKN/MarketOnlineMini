const ProductRoutes = require("./shared/ProductRoutes");
const AuthRoutes = require("./shared/AuthRoutes");

const routes = (app) => {
  // shared router
  app.use("/api/auth", AuthRoutes);

  app.use("/api/shared", ProductRoutes);

  // customer router

  // admin router

  // vendor router
};

module.exports = routes;
