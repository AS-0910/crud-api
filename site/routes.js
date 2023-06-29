const {Router}=require('express');
const controller=require('./controller');

const router=Router();

router.get("/",controller.getSite);
router.get("/:id",controller.getSiteById);
router.post("/",controller.addSite);

module.exports=router;