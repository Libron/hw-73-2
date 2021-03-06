const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express();
const port = 8000;
const CaesarPassword = 'LS';

app.get('/encode/:text', (req,res)=>{
    const encodedText = Caesar.Cipher(CaesarPassword).crypt(req.params.text);
    res.send('Encoded text: ' + encodedText);
});

app.get('/decode/:text', (req,res)=>{
    const decodedText = Caesar.Decipher(CaesarPassword).crypt(req.params.text);
    res.send('Decoded text: ' + decodedText);
});

app.listen(port, ()=> {
    console.log('We are live on localhost:' + port);
});