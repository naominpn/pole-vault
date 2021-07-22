CREATE DATABASE polevault;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    digested_password TEXT,
    name TEXT,
    date DATE
);

CREATE TABLE tricks (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    videoURL TEXT,
    level TEXT,
    date DATE
);

CREATE TABLE user_trick (
    user_id INTEGER,
    trick_id INTEGER,
    date DATE
);

INSERT INTO tricks (name, image, videoURL, level, date) VALUES ('Stargazer', 'https://static.onlinepolestudio.com/images/moves/1/stargazer.jpg', 'https://youtu.be/_mFj3RAOUww?t=3', 'Intermediate', CURRENT_DATE);

INSERT INTO tricks (name, image, videoURL, level, date) VALUES ('Front Hook Spin', 'https://static.onlinepolestudio.com/images/moves/1/fronthookspin.jpg', 'https://youtu.be/1td3NpZp7z8?t=9', 'Beginner', CURRENT_DATE);

INSERT INTO users (email, digested_password, name, date) VALUES ('meow@cat.come', '', 'Dumpling Bobo', CURRENT_DATE);

INSERT INTO user_trick (user_id, trick_id, date) VALUES ('1', '2', CURRENT_DATE);
