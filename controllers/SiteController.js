import Jogo from '../models/jogo.js'
export default class SiteController {
 
    constructor() {
        this.home = async (req, res) => {
          res.render('site/index')
        };

        this.login = async (req, res) => {
          res.render('site/login');
        };

        this.jogos = async (req, res) => {
          const jogos = await Jogo.find({}).populate('genero')
          res.render('site/jogos', {jogos});
        };

    }
 }