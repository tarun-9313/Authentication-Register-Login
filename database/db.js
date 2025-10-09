var mongoose=require("mongoose")
async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONG0_URL)
        console.log("connect to the database");
    }catch(error){
        console.log("error",error);
        

    }
}
module.exports=connectToDatabase