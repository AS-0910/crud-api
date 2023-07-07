const client=require('../../dbConnection');
const queries=require('../services/step_master.service');

//for step master
const getStep=(req,res)=>{
    // console.log("called");
    client.query(queries.getSteps,(error,stpres)=>{
        if(error){
            // console.log("called1");
            throw error;
        }
        // console.log("called2");
        res.status(200).json(stpres.rows)
    });
}

const getStepById=(req,res)=>{
    const stpid=req.params.id;
    // console.log(id);
    client.query(queries.getStepsById,[stpid],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    });
}

let stp=2000;
const addStep=(req,res)=>{
    stp=stp+1;

    const step={
        // num:req.body.siteNum,
        stepName:req.body.stepName,
    }

    // let no=stp;
    // console.log(no);
   
    
    // while(no>0){
    //    console.log(no);
    //    let nno=no/10;
    //    no=nno;
    //    sz=sz+1; 
    // }

    let stpString = Math.abs(stp).toString();
    size=stpString.length;
    // console.log(sz);
    
    stpNum="STEP";
    rq=4-size;
    // console.log(req);
    for(let i=1;i<=rq;i++){
       stpNum=stpNum.concat("0");
    //    console.log(id);
    }

    // console.log(site.siteName);
    // id="TMS";
    // n=toString(cnt);
    // console.log('TMS'+n);
    stpNum=stpNum.concat(stp.toString());
    console.log(stpNum);
    client.query(queries.addSteps,[stpNum,step.stepName],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(201).send("step created!");
    });
}


module.exports={
    getStep,
    getStepById,
    addStep
}