import Login from '../models/login.js'

export default class LoginController{

    constructor(caminhoBase='login/'){
        this.caminhoBase = caminhoBase

        this.openLog = async(req, res)=>{
            res.render(caminhoBase + "log")
        }
        this.add = async(req, res)=>{
            //cria o Login
           
            await Login.create({
                nome: req.body.nome,
                email: req.body.email
            });
            res.redirect('/'+caminhoBase + 'log');
        }
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "cadastro")
        }
        this.add = async(req, res)=>{
            //cria o Login
           
            await Login.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            });
            res.redirect('/'+caminhoBase + 'cadastro');
        }
        this.list = async(req, res)=>{
            const resultado = await Login.find({})
            res.render(caminhoBase + 'lst', {Login:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Login.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Login:resultado})
        }


         this.del = async(req, res)=>{
        await Login.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}