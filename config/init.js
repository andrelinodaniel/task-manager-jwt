const pool = require('./db');

const criarTabelas = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                senha VARCHAR(255) NOT NULL
            );
            `);
            console.log('Tabela de usuários criada com sucesso!');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS tarefas(
                id SERIAL PRIMARY KEY,
                titulo varchar(100) NOT NULL,
                concluida bool Default false,
                usuario_id INTEGER REFERENCES usuarios(id)
        );

            `);
            console.log('Tabela de tarefas criada com sucesso!')
    } catch (erro) {
        console.log('Erro ao criar as tabelas:',erro);
    }finally{
        pool.end();
    }
};

criarTabelas();