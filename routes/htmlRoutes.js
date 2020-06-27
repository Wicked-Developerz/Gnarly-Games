var path = require("path");
var db = require("../models/");


module.exports = function (app) {
  // Load index page
  // "/", "/?search=title", "/?search=genre"
  // {include: [db.art]} throw in findAll later
  app.get("/", function (req, res) {
      db.Game.findAll().then(function(games) {

          console.log(games)
          res.render('index', {games: games});
      }).catch(function(err) {
          // your error handling code here
          throw err;
      });
      
      
      // var getGames = req.query.gameData;
    // games.getAllGames(function (data) {
    //   console.log(data);
    //   res.render("index", { game: data });
    // });
    
    // getGames(function (data) {
      //   console.log(data);
      // });
    });


  app.get("/saved", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/saved.html"));
  });

  

  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Redirecting to index.html if another routname is entered
  // app.get("*", function (req, res) {
  //   console.log("User hit wildcard Route")
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
