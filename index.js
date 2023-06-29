const express=require('express');
const siteRoutes=require('./site/routes.js');

const app=express();
const port=5000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use('/getSite',siteRoutes);


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
}) 