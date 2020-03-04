# SQLite3

- [Install](#install)
- [Start](#start)
- [API](#api)
  - [Create or Open SQLite3](#create-or-open-sqlite3)
  - [Close](#close)
  - [Run](#run)
  - [Get](#get)
  - [Exec](#exec)
  - [All](#all)
  - [Each](#each)
- [Execution sequence](#execution-sequence)
  - [Parallelize](#parallelize)
  - [Serialize](#serialize)
- [Precompile](#precompile)
  - [Prepare](#prepare)
- [Expand](#expand)
  - [If the table exists](#if-the-table-exists)
- [Error](#error)

## Install

```bat
npm i sqlite3 -g
```

安装成功之后可以用`npm list sqlite3 –g`看对应 `sqlite3` 版本

## Start

```js
const sqlite3 = require("sqlite3").verbose();
```

## API

- `Database`：新建并打开 sqlite3 数据库文件
- `close`：关闭数据库
- `run`：执行单条语句以创建/更改表格或插入/更新数据
- `get`：查询一条数据
- `exec`：执行多条语句以创建/更改表格或插入/更新数据
- `all`：查询多条数据
- `each`：查询多条数据并对每条数据执行回调

### Create or Open SQLite3

> if not existed,create and open,else open;

**Grammar**

```js
new sqlite3.Database(file[,mode][,callback])
```

**Params**

- filename：有效值是一个文件名，如：“mydb.db”，数据库打开之后会创建一个“mydb.db”的文件用于保存数据。如果文件名是“:memory:”，表示是一个内存数据库（类似 h2 那种），数据不会持久化保存，当关闭数据库时，内容将丢失。
- mode（可选）：数据库的模式，共 3 种值：sqlite3.OPEN_READONLY（只读），sqlite3.OPEN_READWRITE（可读写）和 sqlite3.OPEN_CREATE（可以创建）。 默认值为 OPEN_READWRITE |OPEN_CREATE。
- callback（可选）:则当数据库成功打开或发生错误时，将调用此函数。 第一个参数是一个错误对象，当它为空时，表示打开成功。

**Examples**

```js
//数据库的名字是"db.db"
var db;
db = new sqlite3.Database("db.db", function(err) {
  if (err) throw err;
});
//也可以使用内存型，数据不会永久保存
db = new sqlite3.Database(":memory:", function(err) {
  if (err) throw err;
});
```

执行后会在项目的根目录生成一个`db.db`文件，这就是 sqlite3 保存数据的文件了。

### Close

**Grammar**

```js
Database.close([callback]);
```

**Params**

- callback（可选）:关闭成功的回调。 第一个参数是一个错误对象，当它为“null”时，表示关闭成功。

**Examples**

```js
db.close(function(err) {
  if (err) throw err;
});
```

### Run

> 该方法可以执行 DDL 和 DML 语句，如建表、删除表、删除行数据、插入行数据等

**Grammar**

```js
Database.run(sql, [param, ...], [callback])
```

**Params**

- sql：要运行的 SQL 字符串。sql 的类型是 DDL 和 DML，DQL 不能使用这个命令。执行后返回值不包含任何结果，必须通过 callback 回调函数获取执行结果。
- param，…（可选）：当 SQL 语句包含占位符（?）时，这里可以传对应的参数。 这里有三种传值方法，如：
  - 直接通过参数传值`db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);`
  - 将值封装为一个数组传值`db.run("UPDATE tbl SET name = ? WHERE id = ?", [ "bar", 2 ]);`
  - 使用一个 json 传值.参数的前缀可以是`:name`，`@name`和`$name`。推荐用`$name`形式 `db.run("UPDATE tbl SET name = $name WHERE id = $id", {$id: 2,$name: "bar"});`
    > 关于占位符的命名，sqlite3 还支持更复杂的形式，这里不再扩展，有兴趣了解的话请查看官方文档。
- callback（可选）：如果执行成功，则第一个参数为 null，否则就是出错。

**Examples**

```js
// Run Create Table
db.run(`create table user (id INT,name VARCHAR,password VARCHAR)`, function(
  err
) {
  if (err) throw err;
  console.log("Create Table Success!");
});
```

```js
// Run Insert Data
db.run(`insert into user values (1,"admin","admin")`, function(err) {
  if (err) throw err;
  console.log("Insert Data Success!");
});
```

```js
// Run Update Data
db.run(`update user set name = "admin123" WHERE id = 1`, function(err) {
  if (err) throw err;
  console.log("Update Data Success!");
});
```

```js
// Run Delete Data
db.run(`delete from user WHERE id = 1`, function(err) {
  if (err) throw err;
  console.log("Delete Data Success!");
});
```

```js
// Run Drop Table
db.run(`drop table user`, function(err) {
  if (err) throw err;
  console.log("Drop Table Success!");
});
```

### Get

**Grammar**

```js
db.get(sql, [param, ...], [callback]);
```

**Params**

- sql：要运行的 SQL 字符串。sql 的类型是 DQL。这里仅返回第一条查询到的数据。
- param，…（可选）：同 Database#run 的 param 参数
- callback（可选）：同样是返回 null 代表执行成功。回调的签名是 function（err，row）。如果查询结果集为空，则第二个参数为 undefined；否则第二个参数值是查询到的第一个对象，他是个 json 对象，属性名称对应于结果集的列名称，因此查询的每一列都应该给出一个列表名。

**Examples**

```js
db.get("select * from user", function(err, row) {
  if (err) throw err;
  console.log(row.id); //0
});
```

### Exec

> Database#exec 与 Database＃run 函数一样，都是 DDL 和 DML 语句，但是 Database#exec 可以执行多条语句，并且不支持占位符参数

**Grammar**

```js
db.exec(sql, [callback]);
```

**Params**

- sql：要运行的 SQL 字符串
- callback(可选)

**Examples**

```js
db.run(`create table user (id INT,name VARCHAR,password VARCHAR)`, function(
  err
) {
  if (err) throw err;
  console.log("Create Table Success!");
  let exec_insert_table = ``;
  for (let i = 0; i < 100; i++) {
    exec_insert_table += `insert into user values (${i},"admin${i}","admin${i}");`;
  }
  db.exec(exec_insert_table, function(err) {
    if (err) throw err;
    console.log("Insert Data Success!");
  });
});
```

### All

> 注意，Database.all 首先检索所有结果行并将其存储在内存中。 对于数据量可能很大的查询命令时候，请使用 Database.each 函数或 Database.prepare 代替这个方法。

**Grammar**

```js
db.all(sql, [param, ...], [callback])
```

**Params**

- sql：要运行的 SQL 字符串。sql 的类型是 DQL。和 Database#get 不同，Database#all 会返回所有查询到的语句。
- param，…（可选）：同 Database#run 的 param 参数
- callback（可选）：同样是返回 null 代表执行成功。回调的签名是 function(err, rows) 。rows 是一个数组，如果查询结果集为空数组。

**Examples**

```js
db.all("select * from user", function(err, rows) {
  if (err) throw err;
  console.log(rows);
});
```

### Each

与 Database＃run 函数相同，都是查询多条数据，但是具有以下区别：

回调的签名是 function（err，row）。如果结果集成功但为空，则不会调用回调。对于每个检索到的行，该方法都会调用一次回调。执行顺序与结果集中的行顺序完全对应。

调用所有行回调后，如果存在 complete 回调函数，将调用这个回调。第一个参数是一个错误对象，第二个参数是检索行数。
**Grammar**

```js
db.each(sql, [param, ...], [callback], [complete])
```

**Params**

- sql
- param
- callback：回调的签名是 function（err，row）。如果结果集成功但为空，则不会调用回调。对于每个检索到的行，该方法都会调用一次回调。执行顺序与结果集中的行顺序完全对应。
- complete：调用所有行回调后，如果存在 complete 回调函数，将调用这个回调。第一个参数是一个错误对象，第二个参数是检索行数。

**Examples**

```js
db.each(
  "select * from user",
  function(err, row) {
    if (err) throw err;
    console.log(row);
  },
  function(err, count) {
    if (err) throw err;
    console.log(count);
  }
);
```

## Execution sequence

sqlite3 的 API 都是异步的，这就会出现可能有若干个命令同时进行的情况，因此 sqlite3 提供了两个函数来帮助控制语句的执行流程。默认是并行模式。

- `parallelize`：并行执行流程模式
- `serialize`：串行执行流程模式

### Parallelize

**Grammar**

```js
db.parallelize([callback]);
```

如果提供回调，它将立即被调用，即此方法的回调不是异步回调。在该回调中调度的所有数据库语句将并行运行。函数返回后，数据库将再次设置为其原始模式。

### Serialize

**Grammar**

```js
db.serialize([callback]);
```

如果提供回调，它将立即被调用，即此方法的回调不是异步回调。在该回调中调度的所有数据库语句将并行运行。函数返回后，数据库将再次设置为其原始模式。

## Precompile

在 java 的 jdbc 中，有个 PreparedStatement 相关的 api，可以预编译 sql 语句，执行的时候再链接具体参数。这样的好处是可以减少 sql 语句被编译的次数。在 sqlite3 中，也存在实现这样功能的 api。

- `prepare`：预编译

### Prepare

**Grammar**

```js
db.prepare(sql, [param, ...], [callback])
```

## Expand

### If the table exists

```sql
SELECT COUNT(*) FROM sqlite_master where type='table' and name='表名'
```

## Error

1. `node-pre-gyp install --fallback-to-build`
   > `npm install -g node-gyp`或切换镜像`cnpm install`
2. `Error: SQLITE_CANTOPEN: unable to open database file`
   > authority or path error
