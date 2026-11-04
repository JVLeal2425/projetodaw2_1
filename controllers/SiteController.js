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
}