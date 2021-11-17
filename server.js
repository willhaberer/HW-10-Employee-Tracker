require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: "books_db",
  },
  console.log(`Connected to the books_db database.`)
);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
