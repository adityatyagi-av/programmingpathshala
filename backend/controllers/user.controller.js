import userModel from "../models/user.model.js";

export const registrationUser = async (req, res, next) => {
      try {
        const { name, email, password,confirmPassword } = req.body;
        if(password!==confirmPassword){
            return res.status(400).json({message:"password and confirm password not match"})
        }
        
        
        const existUser = await userModel.findOne({ email });
        if(existUser){
            return res.status(400).json({message: "User already exist with this email" })
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

  
 

  