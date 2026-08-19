const express = require('express');
const app = express();
app.use(express.json());
const port = 3000
const tasks = [
    { id: 1, title: 'Estudar Node.js', completed: true },
    { id: 2, title: 'Criar a rota de tarefas', completed: false }
];

app.get('/', (req,res) => {
    res.json({
        mensagem: 'Bem-vindo ao Task Manager!!',
        status: 'Servidor 100% online'
    })

});

app.get('/tasks', (req,res)=>{
    res.json(tasks)
})

app.post('/tasks', (req,res)=>{
    console.log(req.body.title);
    if (!req.body.title) {
        return res.status(400).json({erro: 'O título é obrigatorio'})
    }
    const tarefa = {id:(tasks.length)+1,title:req.body.title,completed:false}
    tasks.push(tarefa)
    res.status(201).json(tarefa)
   
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})