const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname, "..", "client/build")));
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


// app.get('/', function(req, res){
//   res.send("Hello World")
// })

app.post('/login', function(req, res){

  const username = req.body.username
  const password = req.body.password

  if(username === 'peerdb' && password === 'peerdb'){
    res.send({isAuth: true})
  }else{
    res.send({isAuth: false})
  }
})









const PORT = process.env.PORT || 5000
app.listen(PORT, function(){
  console.log(`Server is up and running on Port : ${PORT}`)
})
