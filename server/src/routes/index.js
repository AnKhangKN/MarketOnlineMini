const ProductRoutes = require("./shared/ProductRoutes");
const AuthRoutes = require("./shared/AuthRoutes");
const UserRoutes = require("./shared/UserRoutes");
const ShopRoutesSeller = require("./seller/ShopRoutes");
const {verifyToken} = require("../middlewares/authMiddleware");

const routes = (app) => {
  // shared router
  app.use("/api/auth", AuthRoutes);

  app.use("/api/shared", ProductRoutes);

  app.use("/api/user", UserRoutes);

  // customer router

  // admin router

  // seller router

  app.use('/api/seller', ShopRoutesSeller);
};

module.exports = routes;
