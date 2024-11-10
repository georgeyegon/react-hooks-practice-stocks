import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  addToPortfolio,
  removeFromPortfolio,
  setSortBy,
  setFilter,
}) {
  return (
    <div>
      <SearchBar setSortBy={setSortBy} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onStockClick={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
