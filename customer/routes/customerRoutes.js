const express = require('express');
const router = express.Router();

const customerController = require('../controller/customerController')
const cors = require('cors');

let corsOptions={
    origin:["http://localhost:5000"]
};


router.post('/addcustomer',cors(corsOptions),customerController.createCustomer);
router.post('/customerlogin',cors(corsOptions),customerController.customerlogin);
router.get('/viewcustomer',cors(corsOptions),customerController.viewcustomer);
router.put('/updatecustomer/:id',cors(corsOptions),customerController.updatecustomer);
router.delete('/deletecustomer/:id',cors(corsOptions),customerController.deleteCustomer);

module.exports = router;