import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

//Permite que o servidor receba dados em JSON
app.use(express.json());

//Arquivos públicos (somente estas pastas)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//Rota de teste
app.get('/api/status', (req,res) => {
    res.json({
        mensagem: 'Servidor InterFix funcionando!'
    });
});

//Inicia o servidor
app.listen(PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`)
});