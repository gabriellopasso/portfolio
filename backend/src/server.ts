import express from "express";
import dotenv from "dotenv";
import githubRouter from "./routes/githubAPI.ts";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/github", githubRouter);
app.use(
  cors({
    origin: "http://localhost:5173", // só o front do Vite pode consumir
    methods: ["GET", "POST"], // quais métodos HTTP permite
    credentials: false, // se true, permite cookies cross-origin
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
