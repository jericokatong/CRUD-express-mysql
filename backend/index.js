import express from "express";
import cors from "cors";
import userRoute from "./routes/customerRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
