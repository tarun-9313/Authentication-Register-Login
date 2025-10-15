
var express=require("express")
var authMiddleware=require("../middleware/auth-middleware")
var adminMiddleware=require("../middleware/admin-middleware")
var router=express.Router()
router.get("/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({message:"welcome to the admin page"})
})
module.exports=router