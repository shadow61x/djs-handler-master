const { Client, Collection } = require("discord.js");
const express = require("express");
const app = express();
const passport = require("passport");
const {Strategy} = require("passport-discord");
const session = require("express-session");

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// config
const config = require("./config.json")

    let strategy = new Strategy(
      {
        clientID: config.CID,
        clientSecret: config.CSECRET,
        callbackURL: config.CLB,
        scope: ["identify", "guilds", "guilds.join"],
      },
      (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile));
      }
    )

    passport.use(strategy);

    app.use(
        session({
          secret:
            "#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n",
          resave: false,
          saveUninitialized: false,
        })
      );

      app.use(passport.initialize());
      app.use(passport.session());

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

   
// Initializing the project
require("./handler")(client);



app.get('/', function (req, res) {
   res.send(`Test app discord.js v13 / commands bot`)
  })

  app.listen(3000)

client.login(client.config.token);
