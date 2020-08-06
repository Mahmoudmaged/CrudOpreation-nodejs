const http = require('http');
const express= require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const adminDB= require("./controles/Admindb");
const userDB= require("./controles/userdb");
const mysql = require('./databse/cruddb');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'assets')));
app.set("view engine","ejs");
app.set('views','views');
app.use(adminDB);
app.use(userDB);

app.get('/',async(req,res)=>{
    await mysql.execute(`SELECT * FROM Product`).then(
        ([result])=>{ res.render('shop',{result})}   )
   
      
   })



app.listen(3000 , ()=>{
    console.log("server running .....");
});