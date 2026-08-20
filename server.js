const express = require('express');
const app = express();
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

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})