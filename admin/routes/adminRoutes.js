const express=require("express");
const plotrouter=express.Router();
const controller=require("../controllers/plotsController");

plotrouter.post('/addplot',controller.plotRegistration)
plotrouter.get('/getplotdata',controller.getplot)
plotrouter.put('/updateplot/:id',controller.updateplotdata)
plotrouter.delete("/plotdelete/:id",controller.deleteplot)
module.exports=plotrouter