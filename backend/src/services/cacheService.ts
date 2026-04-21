// Cache em memória simples com TTL (Time To Live).
//
// Guarda valores por um tempo determinado para evitar chamadas repetidas
// a APIs externas (ex: GitHub, que tem limite de 60 requisições/hora por IP
// sem autenticação).

interface EntradaCache<T> {
  valor: T;
  expiraEm: number; // timestamp (ms) em que a entrada vira inválida
}

const cache = new Map<string, EntradaCache<unknown>>();

export function getCache<T>(chave: string): T | null {
  const entrada = cache.get(chave);

  if (!entrada) return null;

  if (Date.now() > entrada.expiraEm) {
    cache.delete(chave);
    return null;
  }

  return entrada.valor as T;
}

export function setCache<T>(chave: string, valor: T, ttlMs: number): void {
  cache.set(chave, {
    valor,
    expiraEm: Date.now() + ttlMs,
  });
}

export function limparCache(chave?: string): void {
  if (chave) {
    cache.delete(chave);
  } else {
    cache.clear();
  }
}
