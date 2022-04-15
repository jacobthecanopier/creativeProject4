const monk = require("monk");
const connectionString = "localhost/reviews";
const db = monk(connectionString);

module.exports = db;
