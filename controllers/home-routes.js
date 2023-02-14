const router = require("express").Router();

/*-------------------------------------------------------
example from module:

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

--------------------------------------------------------*/

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