const {Router}=require('express');
const controller=require('../controller/step_master.controller');

const router=Router();

//for step master
router.get("/",controller.getStep);
router.get("/:id",controller.getStepById);
router.post("/",controller.addStep);

module.exports=router;