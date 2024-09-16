import { useEffect, useState } from "react";
import adjectives from "adjectives";
import nouns from "nouns";

export default function useRandomCombination() {
  const [combination, setCombination] = useState<string>();

  useEffect(() => {
    generateCombination();
  }, []);

  const generateCombination = () => {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns.one();
    setCombination(`minor-release/andromeda-${randomAdjective}-${randomNoun}`);
  };

  return { combination, generateCombination };
}
