DROP DATABASE IF EXISTS planner_db;

CREATE DATABASE planner_db;

USE planner_db;

CREATE TABLE planners(

    id int NOT NULL AUTO_INCREMENT,
    plan_name VARCHAR(300) NOT NULL, 
)