require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const index = require("./index");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     MySQL username,
//     user: "root",
//     MySQL password
//     password: "trilogy!",
//     database: "courses_db",
//   },
//   console.log(`Connected to the courses_db database.`)
// );

function userInput() {
  var userTask = index();
  console.log(userTask);
  switch (userTask) {
    case "View All Departments":
      console.log("about to run view department");
      viewAllDepartments();
      break;
    default:
      console.log("Unexpected Error Please Try Again");
  }
}

function viewAllDepartments() {
  sequelize.query(
    "SELECT department.id, department.department_name FROM department;",
    function (err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
}

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

userInput();
