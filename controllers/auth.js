
const bcryptjs = require("bcryptjs");
const userModel = require("../models/user");

const AuthController = {
    signUp: (request, response) => {
        console.log(request.body)
    
        const { userName, email, password, } = request.body
    
        if (!userName || !email || !password) {
            response.json({
                message: 'Required filled are missings',
                status: false
            });
            return;
        }
        
        const hashPassword =  bcryptjs.hashSync (password, 10)
    
        const object = {
            user_name: userName,
            email: email,
            password: hashPassword,
        }

    
        console.log(password)
        console.log(hashPassword)
        userModel.findOne({email: email}, (error, user)=>{
            if (error) {
                response.json({
                    message: `Internal error: ${error}`,
                    status: false,
                })
            } else {
                if(user){
                    response.json({
                        message: `Email Addrss Already Exist`,
                        status: false,
                    })
                }else{
                    userModel.create(object, (error, data) => {
                        if (error) {
                            response.json({
                                message: `Internal error: ${error}`,
                                status: false,
                            })
                        } else {
                            response.json({
                                message: "USER SUCCESSFULLY CREATE",
                                data: data,
                                status: true
                            })
                        }
                    })
                }
            }
        }) 
    },

    login: (request, response)=>{
        // console.log(request.params, "params")
        const {email, password} = request.body;
    
        if (!email || !password) {
            response.json({
                message: 'Required filled are missingsxdfjsdjsd',
                status: false
            });
            return;
        }
    
    
        userModel.findOne( {email: email}, (error, user)=>{
    
            if(error){
                response.json({
                    message: `Internal error: ${error}`,
                    status: false,
                })
            }else{
               if(!user){
                response.json({
                    message: `User does not exist`,
                    status: false,
                })
               }else{
                   const comparePassword = bcryptjs.compareSync(password, user.password)
                //    console.log(comparePassword)
                if(comparePassword){
                    response.json({
                        message: `User successfully login`,
                        user: user,
                        status: true,
                    })
                }else{
                    response.json({
                        message: `The email or password you entered is incorrect.`,
                        status: false,
                    })
                }
               }
            }
        })
    
        // response.send('GET USER')
    },
}


module.exports = AuthController