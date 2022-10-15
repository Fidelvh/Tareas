const { Pool } = require('pg');

//  Objeto de configuración de la instancia Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    port:5432,
    password:'allfilo',
    database:'octubre',
})

// Función asincrónica para ingresar un curso
async function nuevoCurso(nombre,dias,fecha,duracion_meses) {
    try {
        const result = await pool.query(
            `INSERT INTO tareas (nombre,dias,fecha,duracion_meses)
            VALUES ('${nombre}','${dias}','${fecha}','${duracion_meses}')
            RETURNING *`
        );
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// Función asincrónica para consultar todos los cursos
async function consultarCursos() {
    try{
        const result = await pool.query(`SELECT * FROM tareas`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// Función asincrónica para editar un curso
async function editarCurso(id,nombre,dias,fecha,duracion_meses){
    try{
        const result = await pool.query(`
            UPDATE tareas SET
            nombre = '${nombre}',
            dias = '${dias}',
            fecha = '${fecha}',
            duracion_meses = '${duracion_meses}'
            WHERE id = '${id}'
            RETURNING *
        `);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// Función asincrónica para eliminar un curso
async function eliminarCurso(id) {
    try {
        const result = await pool.query(`
            DELETE FROM tareas WHERE id = '${id}'
        `);
        
        return result.rowCount;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { nuevoCurso,consultarCursos,editarCurso,eliminarCurso };