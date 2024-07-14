
const app = require('express')();


app.listen(3000, ()=>console.log("Teste"));


app.get('/inicio', (req, res) => {
    res.send('Texto que vai aparecer na tela.');
});

app.get('/', (req, res) => {
    res.send('Rota principal, fiz essa e a rota inicio. Tendo também a rota inicio e a rota meio.');
});


app.get('/meio', (req, res) => {
    res.send({nome:"Pedro",
idade: 25,
profissão: "Lenhador"});
});
