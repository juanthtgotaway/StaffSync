//required packages to run app
const express = require('express');
// const mysql = require('mysql2');
const app = express();
const inquirer = require("inquirer");
//defines the dynamic port or use 3001 by default
// const PORT = process.env.port || 3001;

//middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//connects to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staffinfo_db'
    },
    console.log("Connected to staffinfo.")
)

//prompts being asked on landing
const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            name:"nav",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
            ],
        },
    ])
};


questions();