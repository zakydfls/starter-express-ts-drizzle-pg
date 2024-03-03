import express, {Express} from "express";
import helmet from "helmet";
import cors from  "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

dotenv.config();

const app: Express = express()
const port: string = process.env.PORT!;

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(cookieParser())

app.get("/", (_, res) =>{
    res.send("Hello world")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
