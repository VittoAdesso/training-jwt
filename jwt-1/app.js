const express = require('express');
const app = express();

const jwt = require("jsonwebtoken");
const keys = require('./settings/keys'); 

app.set('key', keys.key); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res)=> {
        res.send('ITS WORK again')
})

app.get('/aloha', (req, res)=> {
    res.send('alohaaaa')

})

app.post('/login', (req, res)=> {

    if(req.body.usuario == 'aquiles' && req.body.pass == '1234'){
        const payload = {
            check : true
                }; 
            const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '7d'
        }); 
        res.json({
            message : 'Auth Ok', 
            token: token
        }); 
    } else {
        res.json({
            message : 'Incorrect User & password'
        })
    }

}); 
app.listen(4000, ()=> {
    console.log('Server Up http://localhost:4000');
});