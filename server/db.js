const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres", // username for your postgres db in pgAdmin4 when you setup db
  host: "localhost", // localhost because thats where the db is reachable (would be server ip address when hosted)
  database: "test", // name of db you wanna connect with
  password: "", // password, will be an env when pushed to GH
  port: 5432 // generic port for pg
});
module.exports = pool;
