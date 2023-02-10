const router = require("express").Router();

const apiRoutes = require("./api");

// router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
