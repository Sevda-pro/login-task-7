const express=require("express")
const path=require("path")
const router=express.Router();
const controller=require('../controllers/expense');

router.route("/create").post( controller.createCustomer);
router.route("/Alldata").get( controller.findAllCustomer);
router.route("/delete/:id").delete( controller.deleteCustomer);
module.exports=router;