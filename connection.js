const mysql = require('mysql2')

const conn = {
    host:"localhost",
    user:"root",
    password:'',
    database:"school_management"
}
const db = mysql.createPool(conn)

db.getConnection((err,con)=>{
    if(err){
        console.log('My SQL not connected')
        console.log(err)
    }
   else{
    console.log("My SQL connected")
   }
})

module.exports = db;