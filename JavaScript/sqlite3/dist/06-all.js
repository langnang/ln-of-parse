const sqlite3 = require("sqlite3").verbose();

// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
})

db.all("select * from user", (err, rows) => {
    if (err) throw err;
    console.log(rows);
});

// Close
db.close();