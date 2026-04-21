// Tipos compartilhados que representam um "Projeto" do portfolio.
//
// Hoje o backend devolve `RepoFiltrado` (definido em services/githubService.ts),
// que é basicamente a "cara" de um repositório cru do GitHub.
//
// Se no futuro um "Projeto" do portfolio tiver campos que NÃO vêm do GitHub,
// este é o lugar para defini-lo. Exemplos do que poderia existir aqui:
//
// export interface Projeto {
//   id: number;
//   nome: string;
//   descricao: string;
//   linkRepositorio: string;
//   linkDemo?: string;            // URL da demo ao vivo (se existir)
//   imagemCapa?: string;          // caminho da imagem de destaque
//   tecnologias: string[];        // ex: ["React", "TypeScript", "Node"]
//   destaque: boolean;            // se aparece na home como destaque
//   dataInicio: string;           // quando o projeto começou
//   status: "ativo" | "pausado" | "concluido";
// }
//
// Enquanto o portfolio só exibir dados vindos do GitHub, este arquivo pode
// ficar vazio. Só implemente quando surgir um campo que o GitHub não fornece.

export {};
