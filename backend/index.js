import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config();
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";
import JobRoutes from "./routes/job.route.js";
import ApplicationRoutes from './routes/application.route.js';
const app = express();

const PORT =process.env.PORT || 5001;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:["http://localhost:5173"],
    credentials:true,
};
app.use(cors(corsOptions));

//routes

app.use("/api/user",userRoutes);
app.use("/api/company",companyRoutes);
app.use("/api/job",JobRoutes);
app.use("/api/application",ApplicationRoutes);

app.get("/",(req,res)=>{
    res.send('hello server');
});
app.listen(PORT,()=>{
    console.log(`serving running on port: ${PORT}`);
    connectDB();
});
