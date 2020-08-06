const UserRouter=require('express').Router();
const mysql = require('../databse/cruddb');

//display data
UserRouter.get('/admin',async(req,res,next)=>{
    
    await mysql.execute(`SELECT * FROM Product`).then(([result])=>{

        res.render('admin',{result})
 });
   
});

//insert data
UserRouter.post('/addproduct',async(req,res,next)=>{
   const title= req.body.title;
   const description=req.body.description;
 await  mysql.execute(`INSERT INTO Product (title,description) values ('${title}', '${description}')`);
    res.redirect('/admin');
});
//Delet data
UserRouter.get('/delete/:id',async(req,res,next)=>{
  
  await  mysql.execute(`DELETE FROM Product WHERE id=?`,[req.params.id]);
     res.redirect('/admin');
 });
 //Edit and Update data
 UserRouter.get('/edit/:id',async(req,res)=>{
    console.log(req.params.id);
    
        await mysql.execute(`SELECT * FROM    Product WHERE id = ?`,[req.params.id]).then(([result])=>{
                res.render('edit',{result})
        })
       })
 UserRouter.post('/updateProduct/:id',async(req,res,next)=>{
  
    await mysql.execute(`UPDATE Product SET title = ? ,description=?  WHERE id = ?`,[req.body.title,req.body.description,req.params.id])
       res.redirect('/admin')
 });

module.exports=UserRouter;