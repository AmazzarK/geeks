CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year INT,
    genre TEXT,
    platform TEXT
);

CREATE TABLE developers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE game_developers (
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    developer_id INT REFERENCES developers(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, developer_id)
);
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    reviewer_name TEXT,
    comment TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO developers (name) VALUES
('Naughty Dog'),
('CD Projekt Red'),
('Nintendo'),
('Ubisoft'),
('Rockstar Games'),
('Valve'),
('Bethesda'),
('Square Enix'),
('Insomniac Games'),
('FromSoftware');

INSERT INTO games (title, release_year, genre, platform) VALUES
('The Last of Us', 2013, 'Action-Adventure', 'PS4'),
('Cyberpunk 2077', 2020, 'RPG', 'PC'),
('Zelda: Breath of the Wild', 2017, 'Adventure', 'Switch'),
('Assassin''s Creed Valhalla', 2020, 'Action', 'PC'),
('Red Dead Redemption 2', 2018, 'Western', 'PS4'),
('Half-Life 2', 2004, 'Sci-Fi Shooter', 'PC'),
('Skyrim', 2011, 'Fantasy RPG', 'PC'),
('Final Fantasy XV', 2016, 'RPG', 'PS4'),
('Ratchet & Clank', 2016, 'Platformer', 'PS4'),
('Elden Ring', 2022, 'Action RPG', 'PC');

INSERT INTO game_developers (game_id, developer_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);


INSERT INTO reviews (game_id, reviewer_name, comment, rating) VALUES
(1, 'Alice', 'Amazing storytelling!', 5),
(2, 'Bob', 'Buggy but ambitious.', 3),
(3, 'Charlie', 'A masterpiece.', 5),
(4, 'Dana', 'Fun but repetitive.', 4),
(5, 'Eli', 'Visually stunning.', 5);


SELECT * from developers
SELECT * from game_developers
select * from games
select * from reviews