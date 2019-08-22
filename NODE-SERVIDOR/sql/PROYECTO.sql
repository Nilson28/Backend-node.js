CREATE TABLE IF NOT EXISTS EVENTOS 
(
  codigoEvento 	SERIAL,
  nombreEvento 	VARCHAR(30) NOT NULL,
  denpendecia 	VARCHAR(30) NOT NULL,
  fechainicio 	DATE,
  fechafinal 	DATE,
  
  PRIMARY KEY (codigoEvento)
 );

CREATE TABLE IF NOT EXISTS CONFERENCISTAS 
(
  idConferencista VARCHAR(30) NOT NULL,
  nomConferencista VARCHAR(30) NOT NULL,
  correo VARCHAR(30),
  telefono VARCHAR(30),
  especialidad VARCHAR(30),
  sexo VARCHAR(30),
  estado VARCHAR(30) NOT NULL, --POR DEFECTO ACTIVO--

  PRIMARY KEY (idConferencista)
);

CREATE TABLE IF NOT EXISTS ESPACIOS
(
  codigoEspacio SERIAL,
  nomEspacio	VARCHAR(30) NOT NULL,
  capacidad	VARCHAR(30) NOT NULL,

  PRIMARY KEY (codigoEspacio) 
);

CREATE TABLE IF NOT EXISTS CONFERENCIAS
(
  codigoConferencia SERIAL,
  nombreConferencia VARCHAR(30) NOT NULL,
  cupo VARCHAR(30),
  codigoEvento INTEGER NOT NULL,
  idConferencista VARCHAR(30),
  codigoEspacio INTEGER,
  inicio TIMESTAMP,
  final TIMESTAMP,

  PRIMARY KEY (codigoConferencia),
  FOREIGN KEY (codigoEvento) REFERENCES EVENTOS(codigoEvento),
  FOREIGN KEY (idConferencista) REFERENCES CONFERENCISTAS(idConferencista),
  FOREIGN KEY (codigoEspacio) REFERENCES ESPACIOS(codigoEspacio)
);


CREATE TABLE IF NOT EXISTS USUARIOS 
(
  idUsuario VARCHAR(30) NOT NULL,
  nomUsuario VARCHAR(30) NOT NULL,
  correo VARCHAR(30),
  telefono VARCHAR(30),
  contraseña VARCHAR(30) NOT NULL,
  sexo VARCHAR(30),
  tipo VARCHAR(30) NOT NULL, --TIPO OPERADOR O PARTICIPANTE--

  PRIMARY KEY (idUsuario)
);

CREATE TABLE IF NOT EXISTS INSCRIPCIONES
(
  codigoConferencia INTEGER NOT NULL,
  idUsuario VARCHAR(30) NOT NULL,
  fechaRegistro TIMESTAMP NOT NULL,
  estado VARCHAR(30) NOT NULL, --PRE-INSCRITO O INSCRITO--

  PRIMARY KEY (codigoConferencia, idUsuario),
  FOREIGN KEY (codigoConferencia) REFERENCES CONFERENCIAS(codigoConferencia),
  FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUsuario)
);

CREATE TABLE IF NOT EXISTS ENCUESTAS
(
 codigoConferencia INTEGER NOT NULL,
 idUsuario VARCHAR(30) NOT NULL,
 fechaEncuesta DATE NOT NULL,
 p1 INTEGER NOT NULL,
 P2 INTEGER NOT NULL,
 P3 INTEGER NOT NULL,
 P4 INTEGER NOT NULL,
 P5 INTEGER NOT NULL,

 PRIMARY KEY (codigoConferencia, idUsuario),
 FOREIGN KEY (codigoConferencia) REFERENCES CONFERENCIAS(codigoConferencia),
 FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUsuario)
);


INSERT INTO USUARIOS(idUsuario, nomUsuario, correo, telefono, contraseña, sexo, tipo)
VALUES(1234, 'USUARIOTEST', 'EXAMPLE@GMAIL.COM', '555-555-555', 'PASSWORD', 'MASCULINO', 'OPERADOR');
