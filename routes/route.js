import express from 'express';
const router = express.Router();
import controller from '../controllers/controller.js'
const controle = new controller();

router.get('/', controle.home)
router.get('/teste', controle.teste)
router.post('/formulario', controle.formulario)
router.get('/site', (req, res) => {
    res.render('sites/index');
});
export default router