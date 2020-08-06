const UserRouter=require('express').Router();
const mysql = require('../databse/cruddb');
//search on data
UserRouter.post('/search',async(req,res,next)=>{
 let searchtext=(req.body.search) ;
 console.log(searchtext);
 let searcKey =searchtext.substring(0, 2)
 
await mysql.execute(`SELECT * FROM Product WHERE title like '${searcKey}%'`).then(([result])=>{
       
    res.render('search',{result})
})
});

// readmore data
UserRouter.get('/readmore/:id',async(req,res,next)=>{
  
    await mysql.execute(`SELECT * FROM Product WHERE  id = ? `,[req.params.id]).then(([result])=>{
       
        res.render('readmore',{result})
    })
 });

module.exports=UserRouter;