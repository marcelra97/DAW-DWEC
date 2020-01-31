DROP DATABASE IF EXISTS futbol;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON tiendaCuchillos.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE futbol;

CREATE USER IF NOT EXISTS user@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON futbol.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE futbol ;

CREATE TABLE futbolistas (
 _idjugador INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 posicion  VARCHAR(255) NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idjugador));

INSERT INTO futbolistas VALUES (NULL, "Morata","delantero","morata.jpg");
INSERT INTO futbolistas VALUES (NULL, "Silva","defensa","silva.jpg");
INSERT INTO futbolistas VALUES (NULL, "Iniesta","centro","iniesta.jpg");
INSERT INTO futbolistas VALUES (NULL, "Xavi","centro","xavi.jpg");
INSERT INTO futbolistas VALUES (NULL, "Pique","defensa","pique.jpg");
INSERT INTO futbolistas VALUES (NULL, "Ramos","defensa","ramos.jpg");
INSERT INTO futbolistas VALUES (NULL, "Iker","portero","iker.jpg");
INSERT INTO futbolistas VALUES (NULL, "Busquets","centro","busquets.jpg");
INSERT INTO futbolistas VALUES (NULL, "JordiAlba","defensa","jordi.jpg");
INSERT INTO futbolistas VALUES (NULL, "Cazorla","centro","cazorla.jpg");
INSERT INTO futbolistas VALUES (NULL, "Villa","delantero","villa.jpg");

