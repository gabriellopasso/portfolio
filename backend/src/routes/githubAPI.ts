import { Router } from "express";
import { type Request, type Response } from "express";
import { getRepositoriosGitHub } from "../services/githubService.ts";

const router = Router();

router.get("/repos", async (req: Request, res: Response) => {
  const repos = await getRepositoriosGitHub();
  res.json(repos);
});

export default router;
