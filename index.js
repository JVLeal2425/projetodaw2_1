import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
//import jogoRoutes from './routes/JogoRoutes.js'; // rotas externas
//import desenvolvedorRoutes from './routes/DesenvolvedorRoutes.js'; // rotas externas
import generoRoutes from './routes/GeneroRoutes.js';
import jogoRoutes from './routes/JogoRoutes.js';
//import usuarioRoutes from './routes/UsuarioRoutes.js';
//import avaliacaoRoutes from './routes/AvaliacaoRoutes.js';

const PORT = 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
//app.use(jogoRoutes)
app.use(jogoRoutes)
//app.use(desenvolvedorRoutes)
app.use(generoRoutes)
//app.use(usuarioRoutes)
//app.use(avaliacaoRoutes)
app.use(routes)
app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
// Exporta o handler compatível com Vercel
export default app;