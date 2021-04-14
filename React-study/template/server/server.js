const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(cors());

app.get('/api', (req, res) =>{
    res.json({username:''});
});

app.listen(port, ()=>{
    console.log(`Listening on potr ${port}`);
});