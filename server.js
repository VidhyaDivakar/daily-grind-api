const express = require ('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (res,req) => {
res.send('hello');
});

//app.get('/users', aync(req, res) => {}
   



app.listen(port, () =>{
console.log(`Server is running at port:${port}`);
});