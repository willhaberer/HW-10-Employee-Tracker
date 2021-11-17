require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     // MySQL username,
//     user: process.env.DB_USER,
//     // MySQL password
//     password: process.env.DB_PASSWORD,
//     database: "company_db",
//   },
//   console.log(`Connected to the company_db database.`)
// );

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
