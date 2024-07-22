require('dotenv').config()
const express = require('express')
const app = express();
const port = 4000

app.get('/' ,(req,res) => {
    res.send('mohammad')
})

app.get('/login', (req,res) => {
    res.send('<h1>Login page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening port ${port}`);
})