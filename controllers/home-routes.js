const router = require("express").Router();


// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/playersearch", async (req, res) => {
  try {
    res.render("search");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
