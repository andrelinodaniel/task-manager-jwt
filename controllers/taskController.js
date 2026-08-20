const tasks = require('../models/taskModel');

const listarTarefa = (req,res)=>{
    return res.json(tasks.length == 0? {mensagem:"LISTA ESTÁ VAZIA!"}:tasks); 

};

const criarTarefa = (req,res)=>{
    console.log(req.body.title);
    if (!req.body.title) {
        return res.status(400).json({erro: 'O título é obrigatorio'})
    }
    const tarefa = {id:(tasks.length)+1,title:req.body.title,completed:false}
    tasks.push(tarefa)
    res.status(201).json(tarefa)
   
}

const atualizarTarefa = (req,res)=>{
    const idUrl = Number(req.params.id);
    const posicao = tasks.findIndex(task => task.id == idUrl)
    if (posicao === -1 ) return res.status(404).json({mensagem: "item não encontrado!" });
    if (req.body.title !== undefined){
        tasks[posicao].title = req.body.title;
    }
    if (req.body.completed !== undefined){
         tasks[posicao].completed = req.body.completed;
    }
   
    res.status(200).json(tasks[posicao]);



}

const deletarTarefa =  (req,res) => {
    const idUrl = Number(req.params.id);
    const posicao = tasks.findIndex(task => task.id == idUrl )
    if (posicao === -1 ) return res.status(404).json({mensagem: "item não encontrado!" });
    const removedTask = tasks.splice(posicao,1)
    res.status(200).json({msg:` Task ${removedTask[0].title} deletada!`})
}

module.exports = { listarTarefa, criarTarefa, atualizarTarefa, deletarTarefa};