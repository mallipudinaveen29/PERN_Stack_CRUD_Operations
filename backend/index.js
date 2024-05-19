const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body



app.post("/createUser",(req,res)=>{
    const {name,email,mobilenumber,dateofbirth}=req.body;
    console.log(dateofbirth)
    console.log({name,email,mobilenumber,dateofbirth})
    const insetSMT=`INSERT INTO users(name,email,mobileNumber,dataOfBirth) VALUES ('${name}','${email}','${mobilenumber}','${dateofbirth}');`;

     pool.query(insetSMT).then((response)=>{
        console.log("Data Saved")
    })
    .catch((err)=>{
        console.log(err)
    });

})

app.get("/",async (req,res)=>{

    const STMT=`SELECT * FROM users;`
   const data= await pool.query(STMT)
//    console.log(data.rows)
    res.json(data.rows)
   
})

app.get('/getuser/:id',async (req,res)=>{
    const id=req.params.id;
    console.log(id)
    const STMT=`SELECT * FROM users WHERE email='${id}';`
    const data= await pool.query(STMT)
    // console.log(data.rows)  
    res.json(data.rows)
    // res.json(data.rows)
})

app.put('/updateUser/:id',async (req,res)=>{
    const id=req.params.id;
    const {name,email,mobilenumber,dateofbirth}=req.body;
    console.log({name,email,mobilenumber,dateofbirth})
    console.log(id)
    

    const STMT=`UPDATE users SET name=($1) , email=($2) ,mobilenumber=($3) , dataofbirth=($4) WHERE email=($5);`;
    const data= await pool.query(STMT,[name,email,mobilenumber,dateofbirth,id])
    console.log(data.rows)
    res.json(data.rows)

})


app.delete('/deleteUser/:id',async (req,res)=>{
    const id=req.params.id;
    const STMT=`DELETE FROM users WHERE email=($1);`;
    const data= await pool.query(STMT,[id])
    // console.log(data.rows)
    res.json(data.rows)
})





app.listen(3001, () => {
  console.log("server has started on port 5000");
});