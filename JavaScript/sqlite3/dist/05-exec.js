const sqlite3 = require("sqlite3").verbose();

// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
})

db.run(run_create_table, function (err) {
    if (err) throw err;
    console.log("Create Table Success!");
    let exec_insert_table = ``;
    for (let i = 0; i < 100; i++) {
        exec_insert_table += `insert into user values (${i},"admin${i}","admin${i}");`
    }
    db.exec(exec_insert_table, function (err) {
        if (err) throw err;
        console.log("Insert Data Success!");
    })
})

// Close
db.close();