const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./db')
const crudRoutes = require('./Router/crudRoutes')
const Port = process.env.PORT || 5000;

//used to connect with database
connection();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Router 
app.use('/api/cruds',crudRoutes)


app.listen(Port,()=>{
    console.log(`Server is listning on ${Port}...`)
})