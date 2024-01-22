INSERT INTO department (department_name)
VALUES 
('Sales'),
('Marketing'),
('Legal'),
('Finance'),
('Engineering'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Manager', 70000, 1),
('Sales Rep', 100000, 1),
('Sales Rep', 75000, 1),
('Marketing Manager', 65000, 2),
('Graphic Designer', 48000, 2),
('Graphic Designer', 40000, 2),
('Lawyer', 120000, 3),
('Finance Manager', 90000, 4),
('Lead Developer', 150000, 5),
('Sr. Developer', 130000, 5),
('Jr. Developer', 60000, 5),
('Support Specialist', 58000, 6),
('IT Director', 120000, 6),
('IT Security Specialist', 75000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tom', 'Segura', 1, NULL),
('Andrew', 'Shultz', 1, 1),
('Joe', 'Rogan', 1, 1),
('Joe', 'DeRosa', 2, NULL),
('Bobby', 'Lee', 2, 2),
('Ari', 'Shaffir', 2, 2),
('Sean', 'Strickland', 3, NULL),
('Ralph', 'Barbosa', 4, NULL),
('Deric', 'Poston', 5, NULL),
('Akaash', 'Singh', 5, 5), 
('Livingston', 'Allen', 5, 5),
('Virgil', 'Gazaca', 6, 6), 
('Andrew', 'Santino', 6, NULL),
('Theo', 'Von', 6, 6);
