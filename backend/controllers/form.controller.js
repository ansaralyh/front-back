const form = require('../models/form');

// function to enter data into form

exports.enterData = async (req,res) =>{
    const data = req.body;
    const originalData =await form.create(data);

    res.json({
        data:originalData
    })
}