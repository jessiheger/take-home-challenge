// // listens to routes sent by the client
// const express = require('express');
// // access to external db
// const mysql = require('mysql');

// const app = express();
// const port = 8000;
// const table ='users';

// // holds necessary info to connect to db
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PWD,
//   database: process.env.MYSQL_DB,
// });

// app.listen(port, () => {
//   console.log(`App server now listening to port ${port}`);
// });

// app.get('/api/users', (req, res) => {
//   pool.query(`select * from ${table}`, (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(rows);
//     }
//   });
// });