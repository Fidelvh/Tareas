CREATE TABLE cursos (
	id SERIAL PRIMARY KEY, 
	nombre VARCHAR(50), 
	nivel INT, 
	fecha timestamp, 
	duracion INT);

CREATE TABLE tareas (
	id SERIAL PRIMARY KEY, 
	nombre VARCHAR(50), 
	dias INT, 
	fecha date, 
	duracion_meses INT);

	

	DROP TABLE cursos;
	
SELECT * FROM cursos;