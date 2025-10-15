var JWT=require("jsonwebtoken")
var authMiddleware=(req,res,next)=>{
    console.log("middleware is running")

    var authHeader=req.headers["authorization"]
    var token=authHeader.split(" ")[1]
    if(!token){
        return res.status(400).json({message:"no token found"})
    }
    try {
        var verifyToken=JWT.verify(token,process.env.JSON_WEB_TOKEN)

        req.user=verifyToken
        console.log(req.user)
        next()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports=authMiddleware