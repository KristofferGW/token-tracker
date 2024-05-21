import React from 'react';

function SearchResult({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          <h3>Ethereum Address: {result.address}</h3>
          {result.balances.length > 0 ? (
            <ul>
              {result.balances.map((balance, idx) => (
                <li key={idx}>{balance}</li>
              ))}
            </ul>
          ) : (
            <p>No tokens found for this address.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;