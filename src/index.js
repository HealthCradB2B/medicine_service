import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connect} from './config/database.js'

const app = express();

const PORT = 3140
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, async()=>{
    await connect();
    console.log(`Server start at ${PORT}`)
})
