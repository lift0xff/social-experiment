CREATE TABLE users (
  id SERIAL UNIQUE,
  name varchar(100)
  password varchar(100)
);

INSERT INTO users VALUES(DEFAULT, 'mrhello', 'secret');
INSERT INTO users VALUES(DEFAULT, 'em-c-rod', 'rolltide');
INSERT INTO users VALUES(DEFAULT, 'icarop', 'supersecret');
