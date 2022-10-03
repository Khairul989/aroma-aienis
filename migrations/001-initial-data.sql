-- Up

CREATE TABLE IF NOT EXISTS cake(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER,
    description TEXT,
    imageUrl TEXT
);

INSERT INTO cake (name, price, description, imageUrl) VALUES ('Oreo Chocolate Cake', 25.00, 'Oreo cake sample', '/cakes/cake1.jpeg');
INSERT INTO cake (name, price, description, imageUrl) VALUES ('Cadburry Chocolate Cake', 50.00, 'Cadburry cake sample', '/cakes/cake2.jpeg');
INSERT INTO cake (name, price, description, imageUrl) VALUES ('Mix Chocolate Cake', 25.00, 'Oreo and Cadburry cake sample', '/cakes/cake3.jpeg');
INSERT INTO cake (name, price, description, imageUrl) VALUES ('KitKat Chocolate Cake', 25.00, 'KitKat cake sample', '/cakes/cake4.jpeg');
INSERT INTO cake (name, price, description, imageUrl) VALUES ('Chocolate Cake', 25.00, 'Chocolate cake sample', '/cakes/cake5.jpeg');

-- Down
DROP TABLE cake;