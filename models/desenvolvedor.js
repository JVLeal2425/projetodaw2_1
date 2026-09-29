import conexao from '../config/conexao.js'

const Desenvolvedor = conexao.Schema({
    nome: {type:String, required:true},
    categoria: {type:String, required:true}
})

export default conexao.model('Desenvolvedor',Desenvolvedor)