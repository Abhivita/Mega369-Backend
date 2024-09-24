const farmlandModel = require('../models/farmlands')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: '/images',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const farmlandphotoupload = multer({ storage, limits: { fileSize: 100000 } });
const uploadfarmland = farmlandphotoupload.array('files');

exports.addfarmland = async (req, res) => {
    uploadfarmland(req, res, async (err) => {
        try {
            if (!req.files || req.files.length == 0) {
                return res.status(400).json('no files uploded');

            }
            console.log(req.file, 'files', req.files.length);
            const uploadmultiplephotos = req.files.map((i) => i.filename);

            const farmlandData = {
                size: req.body.size,
                logitude: req.body.logitude,
                latitude: req.body.latitude,
                city: req.body.city,
                area: req.body.area,
                owner: req.body.owner,
                purchesdate: req.body.purchesdate,
                availabilty: req.body.availabilty,
                price: req.body.price,
                farmworks: req.body.farmworks,
                watersource: req.body.watersource,
                status: req.body.status,
                features:req.body.features,
                photo: uploadmultiplephotos
            }
            const farmland = new farmlandModel(farmlandData);
            await farmland.save();
            return res.status(200).json(farmland);


        } catch (error) {
            console.log(error);
            return res.status(500).json({ er: 'internal error' });

        }
    })
}

exports.farmlandupdate = async (req, res) => {
    uploadfarmland(req, res, async (err) => {

        try {
            if (!req.files) {
                return res.status(400).json('no files uploded');

            }
            console.log(req.file, 'files', req.files.length);
            const uploadmultiplephotos = req.files.map((i) => i.filename);

            const farmlandData = {
                size: req.body.size,
                logitude: req.body.logitude,
                latitude: req.body.latitude,
                city: req.body.city,
                area: req.body.area,
                owner: req.body.owner,
                purchesdate: req.body.purchesdate,
                availabilty: req.body.availabilty,
                price: req.body.price,
                farmworks: req.body.farmworks,
                watersource: req.body.watersource,
                status: req.body.status,
                features:req.body.features,
                photo: uploadmultiplephotos
            }
            const farmland = await farmlandModel.findByIdAndUpdate(req.params.id, farmlandData);

            if (!farmland) {
                return res.status(400).json({ error: "farmland not found" });
            }
            res.status(200).json(farmland);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ er: 'no update' });

        }
    });
}
exports.getfarmland = async (req, res) => {
    try {
        const getfarmland = await farmlandModel.find()
        res.status(201).json(getfarmland);
    } catch (error) {
        console.log(error);
        res.status(500).json({ re: 'no farmland found ' })

    }
}
exports.deletefarmland = async(req,res)=>{
try {
    const farmlandget = await farmlandModel.findByIdAndDelete(req.params.id);
    res.status(200).json(farmlandget);
} catch (error) {
    console.log(error);
    res.status(500).json({er:'failed to delete farmland'})
    
}
}

