const ProductRoutes = require("./shared/ProductRoutes");
const AuthRoutes = require("./shared/AuthRoutes");
const UserRoutes = require("./shared/UserRoutes");

const routes = (app) => {
  // shared router
  app.use("/api/auth", AuthRoutes);

  app.use("/api/shared", ProductRoutes);

  app.use("/api/user", UserRoutes);

  // customer router

  // admin router

  // vendor router
};

module.exports = routes;
