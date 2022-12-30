const Todo=require('../models/Todo');

const GetAllTodos= async (req,res)=>{
    const includeCompletedTodos=req.query.includesCompleted;
    
    if(includeCompletedTodos==='true'){
        //console.log('in')
        try{
            const Todos=await Todo.find({});
            res.status(200).json({Todos});
        }
        catch(err){
            res.status(400).json({'message':err})
        }
    }
    else{
        try{
            const todos=await Todo.aggregate([{
                $match:{status:'incompleted'},
    
            }])
            res.status(200).json({todos});
        }
        catch(err){
            res.status(400).json({'message':err});
        }
    }
}
const CreateTodo= async (req,res)=>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({todo})
    } catch (err) {
        res.status(400).json({'message':err})
    }
}
const GetTodo= async (req,res)=>{
    try{
        const id=req.params.id;
        console.log(req.params)
        const todo= await Todo.findOne({_id:id});
        if(!todo){
            return res.status(404).json({message:`Not exists wit id:${id}`})
        }
        res.status(200).json({todo})
    }
    catch(err){
        res.status(400).json({'message':err})
    }
}
const UpdateTodo= async (req,res)=>{
    try {
        //console.log('inroute')
        const id=req.params.id;
        
        const task = await Todo.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({message:`Not exists wit id:${id}`})
        }
        res.json({task})
    } catch (err) {
        res.status(400).json({'message':err})
    }
}
const DeleteTodo= async (req,res)=>{
    try {
        const id=req.params.id;
        const todo = await Todo.findOneAndDelete({_id:id})
        if(!todo){
            return res.status(403).json({message:`Not exists wit id:${id}`})
        }
        res.json({todo})
    } catch (err) {
        res.status(400).json({'message':err})
    }
}

module.exports={GetAllTodos,CreateTodo,GetTodo,UpdateTodo,DeleteTodo};
