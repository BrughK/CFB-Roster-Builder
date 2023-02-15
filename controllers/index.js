const router = require("express").Router();
// const Roster = require("../models/Roster");

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const Players = require("../models/players");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("homepage");
});

// router.get("/roster", async (req, res) => {
//   const players = await Players.findAll();
//   res.render("roster", { players });
// });

router.get("/roster", async (req, res) => {
  const playerData = await Players.findAll().catch((err) => {
    res.json(err);
  });
  const players = playerData.map((player) => player.get({ plain: true }));
  res.render("roster", { players });
});

// router.get("/roster", async (req, res) => {
//   res.render("roster");
// });

// router.get("/roster", (req, res) => {
//   res.render("roster");
// });

module.exports = router;
