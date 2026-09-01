import conexao from '../config/conexao.js'

const Jogo = conexao.Schema({
    nome: {type:String, required:true},
    anoLancamento: {type:Number, required:true},
    tempoMedio: {type:String, required:true},
    nota: {type:Number, required:true},
    status: {type:String, required:true},
    imagem: {type:Buffer, required:true},
})

export default conexao.model('Jogo',Jogo)