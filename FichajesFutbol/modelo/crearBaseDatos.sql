DROP DATABASE IF EXISTS futbol;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON tiendaCuchillos.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE futbol;

CREATE USER IF NOT EXISTS tomcat@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON futbol.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE futbol ;

CREATE TABLE futbolistas (
 _idjugador INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 posicion  VARCHAR(255) NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idcuchillo));

INSERT INTO producto VALUES (NULL, "Morata","delantero","morata.jpg");
INSERT INTO producto VALUES (NULL, "Silva","defensa","silva.jpg");
INSERT INTO producto VALUES (NULL, "Iniesta","centro","iniesta.jpg");
INSERT INTO producto VALUES (NULL, "Xavi","centro","xavi.jpg");
INSERT INTO producto VALUES (NULL, "Pique","defensa","pique.jpg");
INSERT INTO producto VALUES (NULL, "Ramos","defensa","ramos.jpg");
INSERT INTO producto VALUES (NULL, "Iker","portero","iker.jpg");
INSERT INTO producto VALUES (NULL, "Busquets","centro","busquets.jpg");
INSERT INTO producto VALUES (NULL, "JordiAlba","defensa","jordi.jpg");
INSERT INTO producto VALUES (NULL, "Cazorla","centro","cazorla.jpg");
INSERT INTO producto VALUES (NULL, "Villa","delantero","villa.jpg");

