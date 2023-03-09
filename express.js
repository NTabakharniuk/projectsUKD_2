const express = require('express');
const app = express();
const port = 3000;
app.get('/', function(req, res){
    res.send('Hello');
});

app.get('/about', function(req, res){
res.send('<div>Anastasiia</div>');
});


app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('Error');
});


app.listen(port, function(){
    console.log('running');
});
