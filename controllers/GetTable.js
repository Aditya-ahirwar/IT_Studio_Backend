import RowSchema from "../RowSchema.js";

const GetTable = async (req, res) =>{
    console.log("get called")
    try{
        const data = await RowSchema.find()
        res.status(200).json(data);
    }
    catch(err){
        res.status(400).send(err);
    }
}

export default GetTable