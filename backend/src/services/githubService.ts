// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "octokit";
import { getCache, setCache } from "./cacheService.ts";

const CHAVE_CACHE_REPOS = "github:repos";
const TTL_REPOS_MS = 10 * 60 * 1000; // 10 minutos

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

export async function getRepositoriosGitHub(): Promise<RepoFiltrado[]> {
  const emCache = getCache<RepoFiltrado[]>(CHAVE_CACHE_REPOS);
  if (emCache) return emCache;

  const octokit = new Octokit();

  const res = await octokit.request("GET /users/gabriellopasso/repos", {
    username: "gabriellopasso",
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

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

  setCache(CHAVE_CACHE_REPOS, reposFiltrados, TTL_REPOS_MS);

  return reposFiltrados;
}
