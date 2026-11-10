import Jogo from '../models/jogo.js'

class SiteController {
    home (req, res) {
        res.render('site/index');
    }

    login (req, res) {
        res.render('site/login');
    }

    jogos (req, res) {
        res.render('site/jogos');
    }
    Jogo = async (req, res) => {
          const jogos = await Jogo.find({})
          res.render('site/jogos', {jogos});
        };
}