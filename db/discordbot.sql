create database if not exists discord ;
use discord;
create table if not exists github(
id int auto_increment primary key,
tag varchar(50),
githublink varchar(200)
);