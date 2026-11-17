import Jogo from '../models/jogo.js'
export default class SiteController {
 
    constructor() {
        this.index = async (req, res) => {
          const jogos = await Jogo.find({}).populate('genero')
          res.render('site/index', {jogos})
        };

        this.login = async (req, res) => {
          res.render('site/login');
        };

        this.jogos = async (req, res) => {
          const jogos = await Jogo.find({}).populate('genero')
          res.render('site/jogos', {jogos});
        };

        this.jogo_det = async (req, res) => {
          const jogos = await Jogo.find({}).populate('genero')
          res.render('site/jogos/:id', {jogos});
        };



    }
 }