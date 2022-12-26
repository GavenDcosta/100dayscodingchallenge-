USE record_company;
SELECT * FROM albums
WHERE release_year BETWEEN 2000 AND 2018;

SELECT * FROM albums 
WHERE release_year IS NULL;

DELETE FROM albums WHERE id = 5 ;   -- will delete the rows with id 5
SELECT * FROM albums;

SELECT * FROM bands
-- JOIN albums ON bands.id = albums.band_id;
-- INNER JOIN albums ON bands_id = albums.bands_id;    
-- LEFT JOIN albums ON bands_id = albums.bands_id;    
RIGHT JOIN albums ON bands_id = albums.bands_id;    
 
 -- Aggregate functions
 SELECT AVG(release_year) FROM albums;   -- will return the average of all release years
 SELECT SUM(release_year) FROM albums;  -- will return tghe sun of all release years
 SELECT COUNT(release_year) FROM albums; -- will return the no of release years
 
 SELECT band_id, COUNT(band_id) FROM albums
 GROUP BY band_id;   -- will give the count of items with the same band_id
 
 SELECt b.name AS band_name, COUNT(a.id) AS num_albums
 FROM bands AS b
 LEFT JOIN albums AS a ON b.id = a.band_id
 GROUP by b.id
 HAVING name_albums = 1;