import express from 'express';
const router = express.Router();

import SiteController from '../controllers/SiteController.js'
const controle = new SiteController();

const caminhobase = '/site'

router.get(caminhobase, controle.index)
router.get(caminhobase + '/login', controle.login)
router.get(caminhobase + '/jogos', controle.jogos)
router.get(caminhobase + '/jogos/:id', controle.jogo_det)

export default router