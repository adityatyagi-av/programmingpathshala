import userModel from "../models/user.model.js";

export const registrationUser = async (req, res, next) => {
      try {
        const { name, email, password,confirmpassword } = req.body;
        console.log(name,email,password,confirmpassword)
        if(password!==confirmpassword){
            return res.status(400).json({message:"password and confirm password not match"})
        }
        
        
        const existUser = await userModel.findOne({ email });
        if(existUser){
            return res.status(400).json({message:"User already exist"})
        }
        const user = await userModel.create({
            name,
            email,
            password,
          });
    

          res.status(201).json({
            success: true,
            user,
            message: `User registered succesfully`,
          });
        } catch (error) {
          res.status(500).send(error.message)
        }
      }

  
 

  