var express= require('express');
var router=express.Router();
chap=require('../model/contactlist');

//get contacts
router.get("/", (req, res) => {
    chap.find({}).exec(function(err,record){ 
    if(err)
    {
        res.send('uuuno');
    }
    else{
       //console.log(record);
        res.json(record);
    }
});
});

//post contacts
router.post("/add", (req, res) => {
    const postobj=new chap(req.body)
    postobj.save();
    return res.json("data stored");

});

//Update Contacts
router.put("/update/:id", (req, res)=>{
    chap.findByIdAndUpdate(req.params.id)
    res.send("updated")
})

//delete contact
router.delete("/deletecontact/:id", async (req, res)=>{
    try {
        const id= req.params.id; 
      const deletesub = await chap.findByIdAndDelete(id)
      res.send(deletesub);
    } catch (error) {
        res.status(500).send(error)
    }
   })




module.exports = router;