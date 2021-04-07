var express=require('express')
var app=express()
var port=3333;

app.use(express.static("./"))

//Routes here
app.get('/', function(req, res){
    res.sendFile('./index.html');
})

//Port Running
app.listen(port, function () {
    console.log(`Server Listening on port ${port}...`)
})