DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;


use company_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id INT NOT NULL auto_increment,
  department_name VARCHAR(30) NOT NULL,
  primary key (id)
);

SELECT * FROM departments