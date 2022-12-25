 -- Creates a data base
 -- CREATE DATABASE test;
 
 -- Deletes a data base
 -- DROP DATABASE test;
 
--  CREATE DATABASE record_company;
--  USE record_company; --  to access and make changes in the database
--  CREATE TABLE test (  --  will create a new table
--   test_column INT   -- creates a column to store integers
--  );
--  
--  ALTER TABLE test  -- to make changes in the table
--  ADD another_column VARCHAR(255); --  will create a string column with a max length of 255
--  DROP TABLE test;

CREATE DATABASE record_company;
USE record_company;
CREATE TABLE bands(
    id INT NOT NULL AUTO_INCREMENT,  --  will add id and increment it for every new item added in the table
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE ALBUMS (    -- name of the table
  id INT NOT NULL 	AUTO_INCREMENT,    -- name of all the columns
  name VARCHAR(255) NOT NULL,
  release_year INT,
  band_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id)  REFERENCES bands(id)  
 --  band id is from another table so we use foreign key
 --  it references the id column of the band table
);

INSERT INTO bands (name)    -- select the column name from the table to insert into
VALUES ('Iron Maiden');

INSERT INTO bands (name)
VALUES ('Deuce'), ('Avenged Sevenfold'), ('Ankor');  -- to add multiple values at the same time

SELECT * FROM bands;   --  * selects all the columns from the table band
SELECT * FROM bands LIMIT 2;  -- outputs only the first 2 values form the column
SELECT name FROM bands;  -- selects only the name column

SELECT id AS 'ID', name AS 'Band Name'  -- changes the column names
FROM bands;   -- can add multiple line breaks..it does not matter

SELECT * FROM bands ORDER BY name; --  will order the values alphabetically
SELECT * FROM bands ORDER BY name DESC; -- will order the values in decending order of alphabets
SELECT * FROM bands ORDER BY name ASC; -- will order the values in ascending order of the alphabets

INSERT INTO albums (name, release_year, band_id)
VALUES ('The NUmber of the Beasts',1985,1),
	   ('Power Slave', 1984, 1),
       ('Nightmare',2018,2),
       ('Nightmare',2010,3),
       ('test Album',NULL,3);
       
SELECT * FROM albums ; -- outputs the entire table
SELECT name FROM albums; -- outputs only the names column
SELECT DISTINCT name FROM albums; -- wont output repeated values

UPDATE albums 
SET release_year = 1982
WHERE id = 1;    -- to change the specific values in the columns

SELECT * FROM albums 
WHERE release_year < 2000;  -- outputs only the ones with release year less than 2000

SELECT * FROM albums
-- WHERE name LIKE '%er%';  -- will output the values with er in the name and some amount of characters before and after er
-- WHERE name LIKE '%er%' OR band_id = 2;
WHERE release_year = 1984 AND band_id = 1;

