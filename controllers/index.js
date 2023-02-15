const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const Players = require("../models/Players");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/roster", async (req, res) => {
  const playerData = await Players.findAll().catch((err) => {
    res.json(err);
  });
  const players = playerData.map((player) => player.get({ plain: true }));
  res.render("roster", { players });
});

router.get("/forgotpassword", (req, res) => {
  res.render("forgotpassword");
});

module.exports = router;
