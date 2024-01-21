DROP DATABASE IF EXIsTS staffInfo_db;
CREATE DATABASE staffinfo_db;

USE staffinfo_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT AUTO_INCREMENT,
    manager_id INT AUTO_INCREMENT NULL,
    FOREIGN KEY (roles_id),
    REFERENCES roles(id),
    FOREIGN KEY(manager_id)
    REFERENCES employee(id)
);