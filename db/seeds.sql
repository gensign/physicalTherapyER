-- User table
CREATE TABLE ptteaching_users (
	user_id SERIAL PRIMARY KEY,
  username VARCHAR(15),
  email VARCHAR(25),
  password VARCHAR(20)
);

SELECT * FROM ptteaching_users;

-- dummy user
INSERT INTO ptteaching_users (username, email, password)
VALUES ('Grizzly', 'sweet@gmail.com', 'quseek'),
('Mark', 'mar@gmail.com', 'doom'),
('Catie', 'dogsareawesome@gmail.com', 'doggies');

-- Hash table
CREATE TABLE mtg_credentials (
	user_id INTEGER REFERENCES mtg_users(user_id),
  hash TEXT
);

SELECT * FROM ptteaching_credentials;