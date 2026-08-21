const express = require('express');
const app = express();
const pool = require('./config/db');
app.use(express.json());
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks',taskRoutes);
const port = 3000

app.get('/', (req,res) => {
    res.json({
        mensagem: 'Bem-vindo ao Task Manager!!',
        status: 'Servidor 100% online'
    })

});

pool.connect((err,_client,release)=>{
        if (err){
            return console.error('Erro ao conectar no banco de dados', err.stack);
        }
        console.log('Banco de dados PostgreSQL conectado com sucesso!');
        release();
    });
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})