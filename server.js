import express from 'express';

const app = express();
const PORT = 3000;

//Permite que o servidor receba dados em JSON
app.use(express.json());

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