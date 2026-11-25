import express from 'express';
const router = express.Router();
//Busca o LoginController
import LoginController from '../controllers/LoginController.js'
const controle = new LoginController();

const caminhobase = 'login/'

router.get('/' + caminhobase + 'log', controle.openAdd)
router.post('/' + caminhobase + 'log', controle.add)
router.get('/' + caminhobase + 'cadastro', controle.openAdd)
router.post('/' + caminhobase + 'cadastro', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)
router.get('/' + caminhobase + 'del/:id', controle.del)
export default router