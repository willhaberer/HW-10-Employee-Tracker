require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const index = require("./index");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

index().then(function (userTask) {
  switch (userTask) {
    case "View All Departments":
      viewAllDepartments();
      break;
    default:
      console.log("Unexpected Error Please Try Again");
  }
});

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
