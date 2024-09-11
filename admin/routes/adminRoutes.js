const express=require("express");
const routes=express.Router();
const controller=require("../controllers/plotsController");
const cors=require("cors")
let corsOptions={
    origin:["http://localhost:5000"]
}
routes.post('/addplot',cors(corsOptions), controller.plotRegistration)
routes.get('/getplotdata',cors(corsOptions),controller.getplot)
routes.put('/updateplot/:id',cors(corsOptions),controller.updateplotdata)
routes.delete("/plotdelete/:id",cors(corsOptions),controller.deleteplot)
module.exports=routes