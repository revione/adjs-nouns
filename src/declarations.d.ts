declare module "adjectives" {
  const adjectives: string[];
  export default adjectives;
}

declare module "nouns" {
  export const nouns: string[];
  export function one(): string;
}
