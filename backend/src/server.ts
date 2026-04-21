import express from "express";
import dotenv from "dotenv";
import { type Request, type Response } from "express";
import { getRepositoriosGitHub } from "./services/githubService";

//const { Request, Response } = express();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const repos = await getRepositoriosGitHub();
  res.json(repos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
