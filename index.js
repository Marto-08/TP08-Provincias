import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import provinceRouter from "./src/modules/province-router.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send('Hola mundo');
});


app.use("/api/province", provinceRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});