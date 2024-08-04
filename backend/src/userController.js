var userModel =require('./userModel');

var createUser = async (req , res) => {
    try{
        var body = req.body;
        const userModelData = new userModel();
        userModelData.username = body.username;
        userModelData.email = body.email;
        userModelData.password =  body.password;
        await userModelData.Save()
         
        res.status(200).send({
            "status": true, message:"User created successfully"
        });
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports ={ createUser };