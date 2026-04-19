// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "octokit";

export interface GitHubRepoResponse {
  id: number;
  name: string;
  full_name: string;
  visibility: string;
  html_url: string;
  description: string;
  language: string;
}

export interface RepoFiltrado {
  id: number;
  name: string;
  full_name: string;
  visibility: string;
  html_url: string;
  description: string;
  language: string;
}

const octokit = new Octokit();

export const res = await octokit.request("GET /users/gabriellopasso/repos", {
  username: "gabriellopasso",
  headers: {
    "X-GitHub-Api-Version": "2026-03-10",
  },
});
//console.log(res.data);

const repositoriosBrutos: GitHubRepoResponse[] = res.data;

const reposFiltrados: RepoFiltrado[] = repositoriosBrutos.map((repo) => ({
  id: repo.id,
  name: repo.name,
  full_name: repo.full_name,
  visibility: repo.visibility,
  html_url: repo.html_url,
  description: repo.description,
  language: repo.language,
}));

console.log(reposFiltrados);
