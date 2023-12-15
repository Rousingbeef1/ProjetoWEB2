const Sequelize = require ('sequelize');
const sequelize = new Sequelize("Trabalho_Web_3", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres"
});

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Pokemon = require("../models/pokemon")(sequelize, Sequelize);

module.exports = db;