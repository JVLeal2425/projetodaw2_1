import express from 'express';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();
//Busca o JogoController
import JogoController from '../controllers/JogoController.js'
const controle = new JogoController();

const caminhobase = 'jogo/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/', upload.single('imagem'), caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)
router.get('/' + caminhobase + 'del/:id', controle.del)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.edt)
export default router