const plotmodel=require("../models/plotsModel")
const multer=require("multer");
const storage=multer.diskStorage({
    destination:"images/",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
});
const photoUpload = multer({ storage, limits: { fileSize: 1000000 } });
const upload = photoUpload.array("files");

exports.plotRegistration = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "plot is not added" });
    }
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No plot uploaded" });
      }

      const photoFilenames = req.files.map((file) => file.filename);

      const plotData = {
        number: req.body.number,
        title: req.body.title,
        price: req.body.price,
        address: req.body.address,
        image: photoFilenames,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        city:req.body.city,
        description:req.body.description,
        size:req.body.size,
        projecttype:req.body.projecttype,
        status:req.body.status,
        owner:req.body.owner
      };

      const plots = new plotmodel(plotData);
      await plots.save();

      return res.status(200).json(plots);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
// getplots
exports.getplot = async (req, res) => {
  try {
    const plotList = await plotmodel.find();
    res.status(201).json(plotList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to get plots" });
  }
};
// deleteplots
exports.deleteplot=async(req,res)=>{
  try{
    const plotdelete=await plotmodel.findByIdAndDelete(req.params.id)
    res.status(200).json(plotdelete)
  }catch(error){
    res.status(500).json({error:"failed to delete plot"})
  }
}
// updateplots
exports.updateplotdata= async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "not updated plotdata" });
    }
    try {
      const plotData = {
        number: req.body.number,
        title: req.body.title,
        price: req.body.price,
        address: req.body.address,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        city:req.body.city,
        description:req.body.description,
        size:req.body.size,
        projecttype:req.body.projecttype,
        status:req.body.status,
        owner:req.body.owner
      };
      if (req.file) {
        const photoFilenames = req.files.map((file) => file.filename);
plotData.image=photoFilenames
      }
      

    
      const land = await plotmodel.findByIdAndUpdate(
        req.params.id,
        plotData
      );
      res.status(200).json(land);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to update plotdata" });
    }
  });
};