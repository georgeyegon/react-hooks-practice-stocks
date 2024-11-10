import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch stocks data from json-server
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const addToPortfolio = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const removeFromPortfolio = (stockId) => {
    setPortfolio(portfolio.filter((stock) => stock.id !== stockId));
  };

  const sortedStocks = stocks
    .filter((stock) => (filter ? stock.type === filter : true))
    .sort((a, b) => {
      if (sortBy === "Alphabetically") return a.name.localeCompare(b.name);
      if (sortBy === "Price") return a.price - b.price;
      return 0;
    });

  return (
    <div>
      <Header />
      <MainContainer
        stocks={sortedStocks}
        portfolio={portfolio}
        addToPortfolio={addToPortfolio}
        removeFromPortfolio={removeFromPortfolio}
        setSortBy={setSortBy}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
