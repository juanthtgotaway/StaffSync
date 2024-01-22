//required packages to run app
const inquirer = require("inquirer");
const mysql = require('mysql2');

//connects to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staffinfo_db'
    },
);

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to staffinfo!");

    questions();
});

//prompts being asked on landing
function questions () {
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
        }
    ])
    //based on answers, function goes off to call that action
    .then(function(answer) {

        if (answer.nav === "View All Employees") {
            viewEmployees();
        }
    });
};

function viewEmployees(){
    connection.query(`SELECT * FROM employee`, (err, result) => {
        if (err) throw err;
        console.table(result);
        
        questions();

    });
};
