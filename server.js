require('dotenv').config({path : "./config.env"});
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require("./middlewares/error")

//connect DB
connectDB();


const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
  extended: true
}));

//middleware
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))
app.use("/api/private", require("./routes/private"));
app.use("/api/course", require("./routes/course"));
app.use("/api/assignCourse", require("./routes/assignCourses"));
app.use("/api/codelab", require("./routes/codelab"));
//error handler should be last peice of middleware
app.use(errorHandler);

const PORT = process.env.PORT||6000;

app.listen(PORT, ()=>{console.log(`server is up and running at ${PORT}`)});

//error handling
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged Error ${err}`);
    //server.close(() => process.exit(1));
  });