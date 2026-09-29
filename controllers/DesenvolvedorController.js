//importar o Model
import Desenvolvedor from '../models/desenvolvedor.js'

export default class DesenvolvedorController{

    constructor(caminhoBase='desenvolvedor/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            //cria o Desenvolvedor
           
            await Desenvolvedor.create({
                nome: req.body.nome,
                categoria: req.body.categoria
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Desenvolvedor.find({})
            res.render(caminhoBase + 'lst', {Desenvolvedor:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Desenvolvedor.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Desenvolvedor:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            //passar quem eu quero editar
            const id = req.params.id
            console.log(id)
            const desenvolvedor = await Desenvolvedor.findById(id) 
            console.log(desenvolvedor)
            res.render(caminhoBase + "edt", 
                {Desenvolvedor:desenvolvedor})
        }


        this.edt = async(req, res)=>{
        await Desenvolvedor.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Desenvolvedor.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}