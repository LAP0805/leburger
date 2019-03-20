drop database if exists leburger_db;
create database leburger_db;


use leburger_db;
create table  burgers(
    id integer(10) not null auto_increment,
    burger_name varchar(100),
    devoured boolean not null default 0,
    primary key (id)
)