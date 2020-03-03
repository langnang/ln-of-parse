const sqlite3 = require("sqlite3").verbose();

// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
})

const get_one = `select * from user`;
// db.get(get_one, function (err, row) {
//     if (err) throw err;
//     console.log(row.id);
// })

// Close
db.close();