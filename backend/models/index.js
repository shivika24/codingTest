const dbConfig  = require("../utils/database.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize; 
db.sequelize = sequelize;

db.questions = require("./questions.js")(sequelize, Sequelize);
db.solutions = require("./solutions.js")(sequelize, Sequelize);

module.exports = db;