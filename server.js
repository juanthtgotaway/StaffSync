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
        
        else if (answer.nav === "Add Employee"){
            addEmployee();
        }

        else if (answer.nav === "Update Employee Role"){
            updateRole();
        }
        
        else if (answer.nav === "View All Roles"){
            viewRoles();
        }

        else if (answer.nav === "Add Role"){
            addRole();
        }
        
        else if (answer.nav === "View All Departments"){
            viewDept();
        }

        else if (answer.nav === "Add Department"){
            addDepartment();
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

function addEmployee() {
    inquirer.prompt ([
        {
            type: 'input', 
            name: 'employeeFN',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'employeeLN',
            message: "What is the employee's last name?"
        },
        {
            type: 'list', 
            name: 'role',
            message: "What will this employees role be?",
            choices: [
                'Sales Manager',
                'Sales Rep',
                'Marketing Manager',
                'Graphic Designer',
                'Lawyer',
                'Finance Manager',
                'Lead Developer',
                'Sr. Developer',
                'Jr. Developer',
                'Support Specialist',
                'IT Director',
                'IT Security Specialist',
            ],
        },
        {
            type: 'list',
            name: 'empManager',
            message: "Who will this employee be reporting to?",
            choices: [
                'Tom Segura',
                'Joe DeRosa',
                'Sean Strickland',
                'Ralph Barbosa',
                'Deric Poston',
                'Andrew Santino',
            ]
        }
    ])
    .then((answers) => {
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)", 
            [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
        console.log("New Employee Added.")    
        questions();
        
      });
}

function updateRole() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'listofemployees',
            message: "Select the employee who you would like to update their role.",
            choices: [
                'Tom Segura',
                'Andrew Shultz',
                'Joe Rogan',
                'Joe DeRosa',
                'Bobby Lee',
                'Ari Shaffir',
                'Sean Strickland',
                'Ralph Barbosa',
                'Deric Poston',
                'Akaash Singh',
                'Livingston Allen',
                'Virgil Gazaca',
                'Andrew Santino',
                'Theo Von',
            ],
        },
        {
            type: 'list',
            name: 'updatedRole',
            message: "What will be the new role for this employee?",
            choices: [
                'Sales Manager',
                'Sales Rep',
                'Marketing Manager',
                'Graphic Designer',
                'Lawyer',
                'Finance Manager',
                'Lead Developer',
                'Sr. Developer',
                'Jr. Developer',
                'Support Specialist',
                'IT Director',
                'IT Security Specialist',
            ],
        }
    ])
    .then((answers) => {
        connection.query(
            "INSERT INTO roles (first_name, last_name, role_id) VALUE (?, ?, ?)", 
            [answers.first_name, answers.last_name, answers.role_id]);
        console.log("Updated employees role");

        questions();

    })
}

function viewRoles(){
    connection.query(`SELECT * FROM roles`, (err, result) => {
        if (err) throw err;
        console.table(result);
        
        questions();

    });
};

function addRole(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'newRole',
            message: "What is the name of th role you would like to add?"
        },
        {
            type: 'input',
            name: 'salary',
            message:"What is the salary for this role?"
        },
        {
            type: 'list',
            name: 'department',
            message: "What department does this role belong to?",
            choices: [
                'Sales',
                'Marketing',
                'Legal',
                'Finance',
                'Engineering',
                'IT',
            ],
        },
    ])
    .then((answers) => {
        connection.query(
            "INSET INTO role (title, salary, department_id) VALUES (?,?,?)", 
            [answers.title, answers.salary, answers.department_id]
        );
        console.log("New Role Added");

        questions();
    })
}

function viewDept(){
    connection.query(`SELECT * FROM department`, (err, result) => {
        if (err) throw err;
        console.table(result);
        
        questions();

    });
};

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDept',
            message: "What is the name of the department you would like to add?"
        },
    ])
    .then((answers) => {
        connection.query(
            "INSERT INTO department (name) VALUES (?)",
            answers.name
        );
        console.log("New department added.");

        questions();
    })
};

