const client=require('../../dbConnection');
const queries=require('../services/site.service');


//for site
const getSite=(req,res)=>{
    client.query(queries.getSites,(error,result)=>{
        if(error){
            throw error;
        }
        // console.log("called");
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

const updateSite=(req,res)=>{
    const id=req.params.id;
    client.query(queries.updateSites,[id],(error,result)=>{
        if(error){
            throw error;
        }
        // console.log("called");
        res.status(200).json("site updated")
    });
}

let cnt=1000;
const addSite=(req,res)=>{
    cnt=cnt+1;

    const site={
        // num:req.body.siteNum,
        siteName:req.body.siteName,
        createdBy:req.body.createdBy
    }

    let no=cnt;
    // console.log(no);
   
    
    // while(no>0){
    //    console.log(no);
    //    let nno=no/10;
    //    no=nno;
    //    sz=sz+1; 
    // }

    let numString = Math.abs(no).toString();
    sz=numString.length;
    // console.log(sz);
    
    id="TMS";
    req=5-sz;
    // console.log(req);
    for(let i=1;i<=req;i++){
       id=id.concat("0");
    //    console.log(id);
    }

    // console.log(site.siteName);
    // id="TMS";
    // n=toString(cnt);
    // console.log('TMS'+n);
    id=id.concat(cnt.toString());
    console.log(id);
    client.query(queries.addSites,[id,site.siteName,site.createdBy],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(201).send("site created!");
    });
}


module.exports={
    getSite,
    getSiteById,
    updateSite,
    addSite,
}