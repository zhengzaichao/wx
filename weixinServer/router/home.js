const express=require("express");
const pool=require('../pool');
var router=express.Router();
router.get("/more",(req,res)=>{
    var sql="SELECT * FROM more_ways";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result})
    })
})
 module.exports=router;