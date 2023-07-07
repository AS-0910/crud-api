const express=require('express');
const siteRoutes=require('./app/routes/site.routes.js');
const stepRoutes=require('./app/routes/step_master.routes.js');

const app=express();
const port=5000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use('/site',siteRoutes);
app.use('/stepMaster',stepRoutes);


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
}) 