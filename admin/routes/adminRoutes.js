const express = require('express')
const routes = express.Router();
const admincontroller = require('../controllers/adminController')
const farmlandcontroller = require('../controllers/farmlandsController')
const cors = require('cors');

let corsOptions = {
    origin: ["http://localhost:5000"]
}

       // admim 
routes.post("/addAdmin", cors(corsOptions),admincontroller.admin);
routes.post("/adminlogin/:id", cors(corsOptions), admincontroller.adminlogin);

      //farmland
routes.post('/farmland-add',cors(corsOptions),farmlandcontroller.addfarland);
routes.put('/farmlandupdate/:id',cors(corsOptions),farmlandcontroller.farmlandupdate);
routes.get('/farmlandget',cors(corsOptions),farmlandcontroller.getfarmland);
routes.delete('/farmlanddelete/:id',cors(corsOptions),farmlandcontroller.deletefarmland);


module.exports = routes;