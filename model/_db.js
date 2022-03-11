const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "enter your username",
  password: "enter your password",
  database: "restaurant",
  connectionLimit: 5,
});

module.exports = pool;
