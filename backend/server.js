import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
import OpenAI from "openai";
import analysisRouter from "./routers/analysis-route.js"

const app = express();

dotenv.config();

app.use(cors());
app.use(json({
    verify: (req, buf) => {
        req.rawBody = buf.toString();
    },
}));

app.use("/analysis", analysisRouter);

//app.use("/user", userRouter);
//app.use("/cashier", cashierRouter);
//app.use("/admin", adminRouter);


app.listen(process.env.PORT, () => {
    console.log("Server opened");
})
