const todoModel = require("../models/todo")

const TodoController = {

    getTodo: (request, response)=>{
        todoModel.find({} , (err, data)=>{
            if(err){
                response.json({
                    message: `Internal error: ${err}`,
                    status: flase,
                })
            }else{
                response.json({
                    message:"Todo get Successfully",
                    data:data,
                    status: true
                })
            }
        })
    },

    postTodo: (request, response)=>{
        console.log(request.body)
    
        const body  = request.body
    
        if(!body.todo ){
            response.json({
                message:'Required filled are missings',
                status: false
            });
            return;
        }
    
        const object = {
            todo: body.todo,
        }
    
        todoModel.create(object, (error, data)=>{
            if(error){
                response.json({
                    message: `Internal error: ${error}`,
                    status: flase,
                })
            }else{
                response.json({
                    message:"Todo Edit Successfully",
                    data:data,
                    status: true
                })
            }
        })
    },

    putTodo: (request, response)=>{
        console.log(request.body)
        const body = request.body
    
        const {id} = request.params
        
        if(!body.todo ){
                    response.json({
                        message:'Required filled are missings',
                        status: false
                    });
                    return;
                }
    
    
                const object = {
                            todo: body.todo,
                        }
    
                        todoModel.findByIdAndUpdate(id, object, (error, data)=>{
                            if(error){
                                response.json({
                                    message: `Internal error: ${error}`,
                                    status: flase,
                                })
                            }else{
                                response.json({
                                    message:"Todo Edit Successfully",
                                    data:data,
                                    status: true
                                })
                            }
                        })
    
        // response.send('UPDATE USER')
    },

    deleteTodo: (request, response) => {

        const { id } = request.params
        console.log(id)
        // response.send('hazma')
    
        todoModel.findByIdAndDelete(id, (error, data) => {
            if (error) {
                response.json({
                    message: `Internal error: ${error}`,
                    status: flase,
                })
            } else {
                response.json({
                    message: "Todo delete Successfully",
                    data: data,
                    status: true
                })
            }
        })
    },
}


module.exports = TodoController