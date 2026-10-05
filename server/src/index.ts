import cors from "cors";
import express from "express";
const app=express();
const port=Number(process.env.PORT??3001);
app.use(cors());
app.use(express.json());
app.get("/health",(_req,res)=>res.json({ok:true,service:"sugoi-api"}));
app.listen(port,()=>console.log(`Sugoi API running on http://localhost:${port}`));
