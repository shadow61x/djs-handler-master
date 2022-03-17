const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!   http://localhost:3000/`)
);
