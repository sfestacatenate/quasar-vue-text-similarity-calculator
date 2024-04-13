export function jaccardSimilarity(str1: string, str2: string): number {
  // Funzione per ottenere l'insieme dei token di una stringa
  const getTokenSet = (str: string): Set<string> => {
      const tokens = str
          .toLowerCase() // Converti tutto in minuscolo per normalizzare
          .match(/\b\w+\b/g); // Tokenizzazione per parole
      return new Set(tokens);
  };

  // Insieme dei token delle due stringhe
  const tokenSet1 = getTokenSet(str1);
  const tokenSet2 = getTokenSet(str2);

  // Calcolo dell'intersezione dei token
  const intersection = new Set([...tokenSet1].filter(token => tokenSet2.has(token)));

  // Calcolo dell'unione dei token
  const union = new Set([...tokenSet1, ...tokenSet2]);

  // Calcolo del coefficiente di Jaccard
  const similarity = intersection.size / union.size;

  return similarity;
}

export function similarityToPercentage(similarity: number): string {
  const percentage = (similarity * 100).toFixed(2);
  return `${percentage}%`;
}
