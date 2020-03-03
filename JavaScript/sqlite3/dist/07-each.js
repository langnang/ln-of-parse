

db.each("select * from user", (err, row) => {
    if (err) throw err;
    console.log(row);
}, function (err, count) {
    if (err) throw err;
    console.log(count);
});

const sqlite3 = require("sqlite3").verbose();
// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) throw err;
})

db.each("select * from user", (err, row) => {
    if (err) throw err;
    console.log(row);
}, function (err, count) {
    if (err) throw err;
    console.log(count);
});


// Close
db.close();