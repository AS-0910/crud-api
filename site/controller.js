const connectDB=require('../db');
const client=connectDB();
client.connect();
const queries=require('./queries');


const getSite=(req,res)=>{
    client.query(queries.getSites,(error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    });
}

const getSiteById=(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    client.query(queries.getSitesById,[id],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    });
}

const addSite=(req,res)=>{
    const site={
        num:req.body.siteNum,
        siteName:req.body.siteName,
        createdBy:req.body.createdBy
    }
    // console.log(site.siteName);
    client.query(queries.addSites,[site.num,site.siteName,site.createdBy],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(201).send("site created!");
    });
}


module.exports={
    getSite,
    getSiteById,
    addSite
}