INSERT INTO department(title)
VALUES
("Engineering"),
("Finance"),
("Marketing"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES
("Senior Software Engineer", 150000, 1),
("Junior Software Engineer", 80000, 1),
("Accountant", 80000, 2),
("Media Specialist", 75000, 3),
("Community Manager", 130000, 3),
("Graphic Desinger", 70000, 3),
("Lawyer", 200000, 4),
("Account Manager", 100000, 2);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
("Bill", "Bork", 2, 2),
("George", "Borden", 1, NULL),
("John", "Doe", 3, 7),
("Jane", "Doe", 4, 5),
("Rachel", "Jenson", 5, NULL),
("Cody", "Rales", 6, 5),
("Charlotte", "Bin", 8, NULL),
("Kayla", "Fringe", 7, NULL);