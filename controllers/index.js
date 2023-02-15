const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const Players = require("../models/players");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
const withAuth = require('../utils/auth');


router.get('/',  async (req, res) => {
  try {

    // Pass loggedIn variable to template context
    res.render('homepage', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/roster", withAuth, async (req, res) => {
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
