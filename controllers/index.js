const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const Players = require("../models/players");

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

module.exports = router;
