
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


const admincontroller = require('../controllers/adminController')
const farmlandcontroller = require('../controllers/farmlandsController')
       // admim 
routes.post("/addAdmin", cors(corsOptions),admincontroller.admin);
routes.post("/adminlogin", cors(corsOptions), admincontroller.adminlogin);

      //farmland
routes.post('/farmland-add',cors(corsOptions),farmlandcontroller.addfarmland);
routes.put('/farmlandupdate/:id',cors(corsOptions),farmlandcontroller.farmlandupdate);
routes.get('/farmlandget',cors(corsOptions),farmlandcontroller.getfarmland);
routes.delete('/farmlanddelete/:id',cors(corsOptions),farmlandcontroller.deletefarmland);


module.exports = routes;

