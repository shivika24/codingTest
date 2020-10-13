require('dotenv').config();
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    dialect: process.env.MYSQL_DIALECT
  };