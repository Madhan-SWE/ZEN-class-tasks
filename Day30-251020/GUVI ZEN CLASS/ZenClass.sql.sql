create database guvi;
use guvi;

CREATE TABLE Users(
  `user_id`  BIGINT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `mobile` INT(10) NOT NULL,
  `college` VARCHAR(45) NOT NULL,
  `current_city` VARCHAR(45) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`));
  
  
INSERT INTO users VALUES (NULL, 'Madhankumar', 'rcmadhankumar@gmail.com', '8110805088', 'KEC', 'Bangalore', 'Student');
INSERT INTO users VALUES (NULL, 'Ashokkumar', 'rcashokkumar@gmail.com', '8110889508', 'KITS', 'Bangalore', 'Student');
INSERT INTO users VALUES (NULL, 'Sureshkumar', 'sukumarumar@gmail.com', '8110559508', 'IITM', 'Chennai', 'Student');
INSERT INTO users VALUES (NULL, 'MaheshKumar', 'maheshkumar@gmail.com', '8110439508', 'IITM', 'Chennai', 'Mentor');
INSERT INTO users VALUES (NULL, 'sachin', 'sachin@gmail.com', '8110439587', 'IITM', 'Chennai', 'Mentor');

CREATE TABLE codekata(
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total_submissions` INT NOT NULL,
  `geek_coins` INT NOT NULL,
  `rank` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userIdKeyCodeKata_idx` (`user_id` ASC),
  CONSTRAINT `userIdKeyCodeKata`
    FOREIGN KEY (`user_id`)
    REFERENCES Users(`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
INSERT INTO codekata VALUES(NULL, '1', '120', '7000', '1024');
INSERT INTO codekata VALUES(NULL, '2', '200', '17000', '724');
INSERT INTO codekata VALUES(NULL, '3', '100', '6000', '1724');
INSERT INTO codekata VALUES(NULL, '4', '80', '4000', '2724');
INSERT INTO codekata VALUES(NULL, '5', '60', '2000', '3724');


CREATE TABLE courses(
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`course_id`));
  
INSERT INTO courses VALUES(NULL, 'Python');
INSERT INTO courses VALUES(NULL, 'AI');
INSERT INTO courses VALUES(NULL, 'Data Structures');
INSERT INTO courses VALUES(NULL, 'Algorithms');
INSERT INTO courses VALUES(NULL, 'Operating Systems')

CREATE TABLE topics( `topic_id` INT NOT NULL AUTO_INCREMENT,
	`topic_name` VARCHAR(45) NOT NULL, 
	`course_id` INT NOT NULL, 
	PRIMARY KEY (`topic_id`), 
	INDEX `courseIdKey_idx` (`course_id` ASC), 
	CONSTRAINT `courseIdKey` FOREIGN KEY (`course_id`) 
	REFERENCES `courses` (`course_id`) 
	ON DELETE NO ACTION
	ON UPDATE NO ACTION);

INSERT INTO topics VALUES(NULL, 'data types', '1');
INSERT INTO topics VALUES(NULL, 'oops', '1');
INSERT INTO topics VALUES(NULL, 'funtions', '1');
INSERT INTO topics VALUES(NULL, 'decorators', '1');
INSERT INTO topics VALUES(NULL, 'iterators', '1');



CREATE TABLE attendance(
  `entry_id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `user_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`entry_id`),
  INDEX `userIdKey_idx` (`user_id` ASC),
  CONSTRAINT `userIdKey`
    FOREIGN KEY (`user_id`)
    REFERENCES Users(`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO attendance VALUES (NULL, '2020-10-05', '1', 'present');
INSERT INTO attendance VALUES (NULL, '2020-10-05', '2', 'present');
INSERT INTO attendance VALUES (NULL, '2020-10-05', '3', 'present');
INSERT INTO attendance VALUES (NULL, '2020-10-05', '4', 'present');
INSERT INTO attendance VALUES (NULL, '2020-10-05', '5', 'present');


CREATE TABLE tasks(
  `row_id` INT NOT NULL AUTO_INCREMENT,
  `task_name` VARCHAR(45) NOT NULL,
  `task_url` VARCHAR(45) NOT NULL,
  `task_date` DATE NOT NULL,
  `task_deadline` DATE NOT NULL,
  `student_id` INT NULL,
  PRIMARY KEY (`row_id`),
  INDEX `studentIdKey_idx` (`student_id` ASC),
  CONSTRAINT `studentIdKey`
    FOREIGN KEY (`student_id`)
    REFERENCES Users (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO tasks VALUES (NULL, 'CallBack', '\"http:sample\"', '2020-10-06', '2020-10-10', '1');
INSERT INTO tasks VALUES (NULL, 'CallBack', '\"http:sample\"', '2020-10-06', '2020-10-10', '2');
INSERT INTO tasks VALUES (NULL, 'CallBack', '\"http:sample\"', '2020-10-06', '2020-10-10', '3');
INSERT INTO tasks VALUES (NULL, 'CallBack', '\"http:sample\"', '2020-10-06', '2020-10-10', '4');
INSERT INTO tasks VALUES (NULL, 'CallBack', '\"http:sample\"', '2020-10-06', '2020-10-10', '5');



CREATE TABLE company_drives( `row_id` INT NOT NULL AUTO_INCREMENT, 
	`drive_name` VARCHAR(45) NOT NULL, 
	`company_name` VARCHAR(45) NOT NULL, 
	`ctc` INT NOT NULL, 
	`student_id` INT NULL, 
	PRIMARY KEY (`row_id`), 
	INDEX `studentIdKey_idx` (`student_id` ASC), 
	CONSTRAINT `studentIdKey2` 
	FOREIGN KEY (`student_id`) 
	REFERENCES Users(`user_id`) 
	ON DELETE NO ACTION 
	ON UPDATE NO ACTION);
	
INSERT INTO company_drives VALUES (NULL, 'HCLDrive', 'HCL', '16', '1');
INSERT INTO company_drives VALUES (NULL, 'Google', 'Google', '20', '1');
INSERT INTO company_drives VALUES (NULL, 'Wipro', 'Wipro', '16', '1');
INSERT INTO company_drives VALUES (NULL, 'Drop box Drive', 'Drop Box', '36', '1');
INSERT INTO company_drives VALUES (NULL, 'Guvi drive', 'GUVI', '16', '1');


CREATE TABLE mentor(
  `row_id` INT NOT NULL AUTO_INCREMENT,
  `mentor_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`row_id`))

INSERT INTO mentor VALUES (NULL, '1', '4');
INSERT INTO mentor VALUES (NULL, '2', '4');
INSERT INTO mentor VALUES (NULL, '3', '5');
INSERT INTO mentor VALUES (NULL, '6', '5');
INSERT INTO mentor VALUES (NULL, '7', '5');


CREATE TABLE students_activated_courses(
  `entry_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  PRIMARY KEY (`entry_id`));
 
INSERT INTO students_activated_courses VALUES (NULL, '1', '1');
INSERT INTO students_activated_courses VALUES (NULL, '1', '2');
INSERT INTO students_activated_courses VALUES (NULL, '1', '3');
INSERT INTO students_activated_courses VALUES (NULL, '1', '4');
INSERT INTO students_activated_courses VALUES (NULL, '1', '5');


SELECT * FROM users INNER JOIN codekata ON users.user_id = codekata.user_id;

SELECT COUNT(student_id) AS Totally_attended FROM company_drives WHERE student_id=1;

select * FROM users 
	inner join 
		(select students_activated_courses.student_id, 
		courses.course_name, courses.course_id as cid 
		from courses INNER JOIN students_activated_courses 
		ON courses.course_id = students_activated_courses.course_id) as res
	ON users.user_id = res.student_id;

select * from users WHERE user_type="mentor";

SELECT * FROM users INNER JOIN 
	(select mentor_id, COUNT(row_id) AS total_students 
		from mentor GROUP BY mentor_id) AS mentor_combined ON 
		users.user_id = mentor_combined.mentor_id;








