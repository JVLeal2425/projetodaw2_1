import conexao from '../config/conexao.js'

const Login = conexao.Schema({
    nome: {type:String, required:true},
    email: {type:String, required:true},
    senha: {type:String, required:true}
})

export default conexao.model('Login',Login)