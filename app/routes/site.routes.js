const {Router}=require('express');
const controller=require('../controller/site.controller');

const router=Router();

//for site
router.get("/",controller.getSite);
router.get("/:id",controller.getSiteById);
router.post("/:id",controller.updateSite);
router.post("/",controller.addSite);

module.exports=router;