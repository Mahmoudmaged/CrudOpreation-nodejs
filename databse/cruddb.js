const mysql2 = require('mysql2');
const query =mysql2.connect({
 
    host:'localhost',
    database:'nodecrud',
    user:'root',
    password:''
});
module.exports=query.promise();
