DROP DATABASE IF EXISTS planner_db;

CREATE DATABASE planner_db;

USE planner_db;

CREATE TABLE planners(

    id int NOT NULL AUTO_INCREMENT,
    plan_name VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);

INSERT INTO planners (plan_name, completed) 
VALUES ('Clean Room', false);

INSERT INTO planners (plan_name, completed)  
VALUES ('Study', false);

INSERT INTO planners (plan_name, completed)  
VALUES ('Fix Resume', false);

INSERT INTO planners (plan_name, completed) 
VALUES ('Clean Garage', false);