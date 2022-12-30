const path = require("path");
require('dotenv').config()
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const connectDB=require('./db/connect');
const TodoRouter = require("./routes/Todo");
//const usersRouter = require("./routes/users");
const errorHandlerMiddleware = require('./middleware/error_handler');
const notFoundMiddleware = require('./middleware/not-found');
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(TodoRouter);
//app.use("/users", usersRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port= process.env.PORT || 3000;
const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL);
    app.listen(port,()=>{
      console.log(`Listening on port ${port}`);
    })
  }
  catch(err){
    res.json({'msg':'Not able to Connect'});
  }
  
};
start();