const {Router}=require('express');
const controller=require('./controller');

const router=Router();

//for site
router.get("/site",controller.getSite);
router.get("/site/:id",controller.getSiteById);
router.post("/site/:id",controller.updateSite);
router.post("/site",controller.addSite);

//for step master
router.get("/stepMaster",controller.getStep);
router.get("/stepMaster/:id",controller.getStepById);
router.post("/stepMaster",controller.addStep);

module.exports=router;