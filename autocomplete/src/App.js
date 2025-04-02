import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const data = await res.json();
    setData(data?.recipes);
  };

  useEffect(() => {
    // in simple it make many api calls like when i press m ->1 , ma->2 , man->3 , mango->4 , mango->5;
    // so we need to make a debounce function
    const debounce = setTimeout(fetchData, 300);

    // cleanup function --> call when the component unmount
    return () => {
      clearTimeout(debounce);
    };
  }, [input]);

  return (
    <div className="App">
      <input
        className="input"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      {showResult && (
        <div className="result-container">
          {data.map((item) => {
            return (
              <span className="result" key={item.id}>
                {item.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
