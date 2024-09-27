const customermodel =  require('../../customer/model/customerModel');
const jwt = require('jsonwebtoken')

exports.createCustomer = async(req,res)=>{

    try {
        const customer = new customermodel(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        console.log('error')
        res.status(500).json({message:'server error'})
    }
}


exports.customerlogin = async (req, res) => {
    try {
      const customer = await customermodel.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!customer) {
        return res.status(404).json("error");
      }
      const passKey = "task-tracker";
      const token = jwt.sign({ email: customer.email }, passKey, {
        expiresIn: "2hr",
      });
      res.status(200).json({ customer, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "no data found" });
    }
  };

exports.viewcustomer = async(req,res)=>{
    try {
        const customer =await customermodel.find();
        res.status(200).json(customer);
    } catch (error) {
        console.log('error');
        res.status(500).json('internal server error')
    }
}

exports.updatecustomer = async(req,res)=>{
    try {
        const customer = await customermodel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(customer);
    } catch (error) {
        console.log('error');
        res.status(500).json('internal server')
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await customermodel.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error); // Improved logging
        res.status(500).json({ message: 'Internal server error' });
    }
};

