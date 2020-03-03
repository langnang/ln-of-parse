const sqlite3 = require("sqlite3").verbose();
// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) throw err;
})