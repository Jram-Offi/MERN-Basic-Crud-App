const express=require('express');
const router = express.Router();
const studentsmodel = require('../models/studSchema');

router.post("/addstud",async (req,res)=>{
    console.log(req.body);

    const {name,address,subject,mobile} = req.body;
    
    if(!name || !address || !subject || !mobile)
    {
        res.status(404).json("Please fill the Data");
    }

    try{
        const prestud = await studentsmodel.findOne({mobile:mobile});
        if(prestud){
            res.status(404).json("This Students already presented");
        }
        else{
            const addstudent = new studentsmodel({name,address,subject,mobile});
            await addstudent.save();
            res.status(201).json(addstudent);
        }
    }catch(err){
        res.status(404).json(err);
    }
});

router.get("/studs",async (req,res)=>{
    try{
        const student = await studentsmodel.find();
        res.send(student);
    }catch(err){
        res.status(404).json(err);
    }
});

// update records

router.put('/updatestud/:id',async(req,res)=>{
    try{
        const _id  = req.params.id;
        const body = req.body;
        const updatestudents = await studentsmodel.findByIdAndUpdate(_id,body,{new:true});

        if(!updatestudents){
            res.status(201).send({
                "status": true,
                "massage": "Student as Updated ... !!!!!"
            });
        }
        return res.status(200).send(updatestudents);

    }
    catch(error){
        res.status(400).send(error);
    }
});

router.delete('/deletestud/:id', async(req, res) => {
    const _id  = req.params.id;

    try{
        const deletestudents = await studentsmodel.findByIdAndDelete(_id);

        if(!deletestudents){
            res.status(201).send({
                "status": true,
                "massage": "Student as Deleted ... !!!!!"
            });
        }
        return res.status(200).send(deletestudents);

    }
    catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;