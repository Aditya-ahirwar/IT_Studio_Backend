import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors";
import GetTable from './controllers/GetTable.js';
import { AddRow, UpdateRow } from './controllers/AddRow.js';
import DeleteRow from './controllers/DeleteRow.js';
import SendRows from './controllers/SendRows.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())

app.get('/', GetTable)
app.post('/add', AddRow)
app.delete('/:id', DeleteRow)
app.put('/:id', UpdateRow)
app.post('/send', SendRows)
 
const connect = ()=>{
    mongoose.connect(process.env.SECRET_KEY)
    .then(()=>{console.log("DB connected")})
    .catch((err) =>{ console.log(err)
        // throw err;
})
}


app.listen(PORT, ()=>{
    connect();
    console.log("server is up");
})