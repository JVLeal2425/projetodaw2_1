import express from 'express';
const router = express.Router();
//Busca o DesenvolvedorController
import DesenvolvedorController from '../controllers/DesenvolvedorController.js'
const controle = new DesenvolvedorController();

const caminhobase = 'desenvolvedor/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)
router.get('/' + caminhobase + 'del/:id', controle.del)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.edt)
export default router