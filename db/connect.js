const mongoose =require('mongoose');
mongoose.set('strictQuery', true);

const connectDb =(url)=>{
    return mongoose
    .connect(url)
    .then(()=>console.log(`connnected to db.........`))
    .catch((err)=>console.log(err))
}
module.exports = connectDb;
