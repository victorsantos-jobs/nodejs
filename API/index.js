
const app = require('express')();


app.listen(3000, ()=>console.log("Teste"));


app.get('/inicio', (req, res) => {
    res.send('Texto que vai aparecer na tela.');
});

app.get('/meio', (req, res) => {
    res.send({nome:"Pedro",
idade: 25,
profissão: "Lenhador"});
});