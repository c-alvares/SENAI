DROP DATABASE IF EXISTS blob_pessoas;
CREATE DATABASE blob_pessoas CHARSET= UTF8 COLLATE utf8_general_ci;
USE blob_pessoas;

CREATE TABLE cadastrados(
    login VARCHAR(20) PRIMARY KEY NOT NULL,
    nome VARCHAR(25),
    nascimento DATE NOT NULL,
    telefone VARCHAR(13),
    tipo VARCHAR(5) NOT NULL,
    thumb MEDIUMBLOB
    
);

INSERT INTO cadastrados VALUES
('victor_barros92', 'Victor Barros', '1992-05-02', '21 99751-2209', '.jpg', LOAD_FILE("C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobitens/pic1.jpg")),
('kate_sulli85', 'Kate Sullivan', '1997-07-06', '11 78543-2254', '.jpg', LOAD_FILE("C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobitens/pic2.jpg")),
('kaylab', 'Kayla Bosa', '1980-06-01', '16 98517-3478', '.jpg', LOAD_FILE("C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobitens/pic3.jpg")),
('donna31', 'Donna Campbell', '2000-02-12', '71 99521-3214', '.jpg', LOAD_FILE("C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobitens/pic4.jpg")),
('ottovonbell', 'Otto Von Bell', '1951-10-20', '87 99647-7458', '.jpg', LOAD_FILE("C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobitens/pic5.jpg"));

SELECT login, nome, nascimento, telefone, tipo FROM cadastrados;

SELECT thumb INTO DUMPFILE "C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobresults/file1.jpg" FROM cadastrados WHERE login = "victor_barros92";
SELECT thumb INTO DUMPFILE "C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobresults/file2.jpg" FROM cadastrados WHERE login = "kate_sulli85";
SELECT thumb INTO DUMPFILE "C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobresults/file3.jpg" FROM cadastrados WHERE login = "kaylab";
SELECT thumb INTO DUMPFILE "C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobresults/file4.jpg" FROM cadastrados WHERE login = "donna31";
SELECT thumb INTO DUMPFILE "C:/Users/Desenvolvimento/Desktop/BLOB/docs/assets/blobresults/file5.jpg" FROM cadastrados WHERE login = "ottovonbell";