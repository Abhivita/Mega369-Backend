const adminModel = require('../models/adminModel');
const jwt = require('jsonwebtoken')
exports.admin = async (req, res) => {
    try {
        const adminadd = new adminModel(req.body);
        await adminadd.save();
        res.status(201).json(adminadd);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "falied to update admin" });

    }
};

exports.adminlogin = async (req, res) => {
    try {
        const login = await adminModel.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (!login) {
            return res.status(404).json('error');

        }
        const JWT_SECRET = 'my_secret_key';
        const token = jwt.sign({
            email: login.email
        }, JWT_SECRET, { expiresIn: "1hr", });
        res.status(200).json({login,token});
    } catch (error) {
        console.log(error);
        res.status(500).json({ er: 'failed to login' })

    }
};
