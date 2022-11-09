const login  = require("fb-chat-api")
const fs  = require("fs")
const rrll = require("readline")
const express = require('express')
const app = express()
const port = 3000
const rl =rrll.createInterface({
    input:process.stdin,
    output:process.stdout
})

const item={
    appState:JSON.parse(fs.readFileSync("cookie.json","utf-8"))
}

app.get('/AK/:text', (req, res) => {
    async function Logined(err,api) {
        if(err) return console.error(err);
        api.setOptions({listenEvents: true});
        var yourID = "ID";
         
        await api.sendMessage(req.params.text, yourID);

    }
    login(item,Logined);
    res.send('Send');
  })
  
  var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })