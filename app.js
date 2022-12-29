const path = require("path");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");

const taskRouter = require("./routes/Todo");
//const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/to-do", taskRouter);
//app.use("/users", usersRouter);
app.get("/",(req,res)=>{
    res.json({'messaage':'hello world'});
})
const port= process.env.port || 3000;
const start = () => app.listen(3000, function() {
  console.log(`Listening on port ${port}`);
});
start();