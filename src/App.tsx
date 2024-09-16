import useRandomCombination from "./_fragments/useRandomCombination";

const App = () => {
  const { combination, generateCombination } = useRandomCombination();

  return (
    <div>
      <h1>{combination}</h1>
      <button
        onClick={generateCombination}
        style={{ padding: "10px 20px", fontSize: "20px" }}
      >
        Generate
      </button>
    </div>
  );
};

export default App;
