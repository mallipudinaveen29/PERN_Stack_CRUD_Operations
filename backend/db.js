const {Pool} = require("pg")
// const {response}=require('express')
const pool = new Pool({
  user: "postgres",
  password: "Naveen#17",
  host: "localhost",
  port: 5432,
  database: "details"
})

// const createTblQry=`CREATE TABLE users(
//     name VARCHAR(50),
//     email VARCHAR(50) NOT NULL PRIMARY KEY,
//     mobileNumber VARCHAR(50),
//     dataOfBirth VARCHAR(50)
//   );`

// const createTblQry=`CREATE DATABASE details;`
// pool.query(createTblQry)
// .then((Response)=>{
//     console.log("Table is created");

//     console.log(response)

// })
// .catch((err)=>{
//     console.log(err)
// }
// )
module.exports = pool;