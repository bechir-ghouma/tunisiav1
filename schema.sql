DROP DATABASE IF EXISTS mydb ;

CREATE DATABASE mydb ;

USE mydb ;

CREATE TABLE tunisia (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL ,
  author varchar(50) NOT NULL ,
  password varchar(50),
  url varchar(300) ,
  description varchar(550) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
INSERT INTO tunisia (title,author,password,url,description) VALUES ('Carthage','bechir','hoyhoy','https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4LyMF','Carthage was the capital city of the ancient Carthaginian civilization, on the eastern side of the Lake of Tunis in what is now Tunisia. Carthage was the most important trading hub of the Ancient Mediterranean and one of the most affluent cities of the classical world.');
INSERT INTO tunisia (title,author,password,url,description) VALUES ('Star Wars In Tatooine','philip','starwars','https://cdn.getyourguide.com/img/tour/5d1fe913f03f3.jpeg/148.jpg','If you are a fan of the Star Wars film series, then you are probably aware that main character Luke Skywalker hails from the planet of Tatooine, a dusty desert world inhabited by strange creatures and presided over by twin suns.');
INSERT INTO tunisia (title,author,password,url,description) VALUES ('Montains','Jadd','jadou','https://c0.wallpaperflare.com/preview/638/302/523/nature-outdoors-grass-plant.jpg','The North-West for its forests in Ain Draham and picturesque coastal mountains close to Tabarka');
INSERT INTO tunisia (title,author,password,url,description) VALUES ('Tunis','Daniel','dani','https://media.gettyimages.com/photos/tunis-medina-and-zitouna-mosque-iconic-arab-city-picture-id114650249?k=6&m=114650249&s=612x612&w=0&h=GfmdyYchVLrbeRN7g9x3QL39pVTMyko_0O6S8VsrW2c=','Although it’s famous for its sprawling sand dunes, elegant spas and desert Star War sets, the smallest country in North Africa is not always synonymous with beauty, but of course, beauty is subjective and vastly underrated Tunisia is home to many places easily worthy of the word. From magical mountain oases to atmospheric holy cities, here is my choice for 20 of the most beautiful places to visit in Tunisia…');

