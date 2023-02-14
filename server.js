const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dotenv = require('dotenv');
dotenv.config();

global.API_KEY = process.env.API_KEY;

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const sess = {
  secret: 'Go Ask Alice',
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));


// this POST request handles the API call made in search.handlebars
app.post('/players', async (req, res) => {
  const { name, team, position, year } = req.body;

  const apiUrl = `https://api.collegefootballdata.com/player/search?searchTerm=${name}&position=${position}&team=${team}&year=${year}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': API_KEY
      }
    });

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error('Error retrieving player data:', error);
    res.status(500).send('An error occurred while retrieving player data.');
  }
});



app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
