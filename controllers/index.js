const router = require("express").Router();
// const Roster = require("../models/Roster");

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');


router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("homepage");
});


router.get("/roster", (req, res) => {
  res.render("roster");
});

router.get("/forgotpassword", (req, res) => {
  res.render("forgotpassword");
});

module.exports = router;
