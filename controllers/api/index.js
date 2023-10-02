const router = require("express").Router();

const userRoutes = require("./user-routes")
const commentRoutes = require("./comment-routes.js")
const dashboardRoutes = require("./dashboard-routes")
router.use("/user", userRoutes)
router.use("/comment", commentRoutes)
router.use("/dashboard", dashboardRoutes)

module.exports = router;