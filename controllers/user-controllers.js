
var user = require("../model/user")
var byCrpt = require("bcrypt")
var webToken = require("jsonwebtoken")
// register controller
var register = async(req,res)=>{
    try{
        // extract the user information
        var {userName,email,password,role} = req.body 
        // check wethere the userName and email exists
        var userExists = await user.findOne({$or : [{userName},{email}]})
        if(userExists){
            return res.status(201).json({message : "user exists"})
        }
        // generate a salt and hash the password
        var salt = await byCrpt.genSalt(10)
        var hashPassword = await byCrpt.hash(password,salt)
        // create a new user in the data base 
        var myUser = await user.create({
            userName,
            email ,
            password  : hashPassword,
            role 
        })
        // send the sucessfull response
        if(myUser){
         return res.status(201).json({message : "created a new user"})

        }else{
            return res.status(400).json({message : "cannot create"})
        }


    }catch(error){
        console.log("error",error);
    }
}

var login = async(req,res)=>{
    try{
        var {userName,password} = req.body
        var userThere = await user.findOne({userName})
        if(!userThere){
            return res.status(400).json({messae : "invalid username and passsowrd"})
        }

        var isPassword = await byCrpt.compare(password,userThere.password)
        if(!isPassword){
            return res.status(400).json({message : "invalid username and password"})

  
        }
        // generate a json web tokens
        var ganerateToeken=webToken.sign({
            userId:userThere._id,
            userName:userThere.userName,
            role:userThere.role


        },process.env.JSON_WEB_TOKEN,{expiresIn:"10m"})
        res.status(200).json({message:"login sucess",token:ganerateToeken,sucess:true})

        



    }catch(error){
        console.log("error",error);
    }
}

module.exports = {
    register,login
}
