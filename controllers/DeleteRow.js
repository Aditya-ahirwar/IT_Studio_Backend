import RowSchema from "../RowSchema.js";

const DeleteRow = (req, res) =>{
    const rowId = req.params.id;
    RowSchema.findByIdAndDelete(rowId)
    .then( ()=>{
        res.status(200).send("row deleted");
    })
    .catch((err) =>{console.log(err)})
}

export default DeleteRow;