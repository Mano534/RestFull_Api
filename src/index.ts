// pake age imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// 
// clear console
console.clear();
// 
// files imports
import subscribersRouter from './routs/subscribers';
// 
// connection to database
mongoose.connect(process.env.DATABASE_CONECTION!,{ useNewUrlParser: true , useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('error',(error)=>{
    console.log(error)
})
connection.once('open',()=>{
    console.log('connected to database')
})
// 


// express app 

const app = express();

// basic setup 

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// 


// routes
app.use('/subscribers',subscribersRouter)
// 




// listening to the server
const port = process.env.PORT || 5000 ; 
app.listen(port,()=>{
    console.log('listening to port '+port)
})
// 









