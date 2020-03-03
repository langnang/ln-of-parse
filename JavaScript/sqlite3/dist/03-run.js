const sqlite3 = require("sqlite3").verbose();

// Create or Open
const db = new sqlite3.Database("SQL/SQLite3/parse.db", function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
})

// Run Create Table
const run_create_table = `create table user (id INT,name VARCHAR,password VARCHAR)`;
// db.run(run_create_table, function (err) {
//     if (err) throw err;
//     console.log("Create Table Success!");
// })
// Run Insert Data
const run_insert_data = `insert into user values (1,"admin","admin")`;
// db.run(run_insert_data, function (err) {
//     if (err) throw err;
//     console.log("Insert Data Success!");
// })
// Run Update Data
const run_update_data = `update user set name = "admin123" WHERE id = 1`;
// db.run(run_update_data, function (err) {
//     if (err) throw err;
//     console.log("Update Data Success!");
// })
// Run Delete Data
const run_delete_data = `delete from user WHERE id = 1`;
// db.run(run_delete_data, function (err) {
//     if (err) throw err;
//     console.log("Delete Data Success!");
// })
// Run Drop Table
const run_drop_table = `drop table user`;
// db.run(run_drop_table, function (err) {
//     if (err) throw err;
//     console.log("Drop Table Success!");
// })

// Close
db.close();