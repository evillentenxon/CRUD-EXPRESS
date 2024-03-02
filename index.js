const express= require('express');
const cors= require('cors');

const app= express();

app.use(cors({
    origin:'*'
}));

const mongoose= require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/REACT_BACKEND");

const post_route= require('./routes/postRoute');
app.use('/api',post_route);

app.listen(8000,()=>{
    console.log("Server is running 8000");
})