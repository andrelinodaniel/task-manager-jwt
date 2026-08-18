const express = require('express');
const app = express();
const port = 3000
app.get('/', (req,res) => {
    res.json({
        mensagem: 'Bem-vindo ao Task Manager!',
        status: 'Servidor 100% online'
    })

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})