import mongoose from "mongoose";
import RowSchema from '../RowSchema.js'

export const AddRow = async (req, res) =>{
    const newRow = new RowSchema(req.body);
    try{
        const savedRow = await newRow.save()
        res.status(200).send(savedRow)
    }catch(err){
        console.log(err)
    }
}

export const UpdateRow = (req, res) =>{
    const rowId= req.params.id;
    const updated = req.body;
    RowSchema.findByIdAndUpdate(rowId, updated, {new : true})
    .then((updated) =>{
        res.json(updated)
    })
    .catch((err) =>{
        res.status(400).send("No data with provided Id")
    })
}