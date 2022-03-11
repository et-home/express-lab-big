const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "192.168.1.15",
  user: "ethan",
  password: "w8Q1Ji8I23s2r4YIsocemabAb5nEQo",
  database: "restaurant",
  connectionLimit: 5,
});

module.exports = pool;
