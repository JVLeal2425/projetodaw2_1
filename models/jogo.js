import conexao from '../config/conexao.js'

const Jogo = conexao.Schema({
    nome: {type:String, required:true},
    anoLancamento: {type:Number, required:true},
    tempoMedio: {type:String, required:true},
    nota: {type:Number, required:true},
    status: {type:String, required:true},
    imagem: {type:Buffer,
        get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`; required:true}
})

export default conexao.model('Jogo',Jogo)