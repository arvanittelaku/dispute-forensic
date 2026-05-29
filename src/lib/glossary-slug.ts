export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\[.*?\]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function glossaryAnchorId(term: string): string {
  return termToSlug(term);
}
