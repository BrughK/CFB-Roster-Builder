const router = require("express").Router();
// const Roster = require("../models/Roster");

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');


router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("homepage");
});

// router.get("/roster", async (req, res) => {
//   const rosterData = await Roster.findAll().catch((err) => {
//     res.json(err);
//   });

//   const rosters = rosterData.map((roster) => roster.get({ plain: true }));

//   res.render("roster", { rosters });
// });

router.get("/roster", (req, res) => {
  res.render("roster");
});

module.exports = router;
