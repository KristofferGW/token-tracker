import React, { useState } from 'react';
import './App.css';
import SearchResult from './components/SearchResult';

function App() {
  const [ethAddresses, setEthAddresses] = useState('');
  const [tokenAddresses, setTokenAddresses] = useState('');
  const [selectedChain, setSelectedChain] = useState('ethereum');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const formatAddresses = (addresses) => {
    addresses = addresses.replace(/\s+/g, '');
    let formatAddresses = addresses.match(/0x[a-fA-F0-9]{40}/g);
    return formatAddresses ? formatAddresses.join(',') : '';
  }

  const handleAddressChange = (e) => {
    setEthAddresses(formatAddresses(e.target.value));
  }

  const handleTokenChange = (e) => {
    setTokenAddresses(formatAddresses(e.target.value));
  }

  const handleChainChange = (e) => {
    setSelectedChain(e.target.value);
  }

  const handleSearch = async () => {
    setShowResults(true);
    const response = await fetchWalletsWithBalances();
    setResults(response);
  }

  const fetchWalletsWithBalances = async () => {
    const endpoint = 'http://localhost:3000/getWalletsWithTokenBalances';
    const params = new URLSearchParams({
      addresses: ethAddresses,
      tokens: tokenAddresses,
      chain: selectedChain
    });
    const url = endpoint + '?' + params.toString();

    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
    }
  }

  return (
    <div className="App">
      <h2>Ethereum Wallet Addresses</h2>
      <textarea
        onChange={handleAddressChange}
        placeholder='Enter Ethereum wallet addresses here'
      />

      <h2>Token Contract Addresses</h2>
      <textarea
        onChange={handleTokenChange}
        placeholder='Enter token contract addresses here'
      />
      <hr />
      <select value={selectedChain} onChange={handleChainChange}>
        <option value="ethereum">Ethereum</option>
        <option value="polygon">Polygon</option>
        <option value="bsc">BSC</option>
        <option value="arbitrum">Arbitrum</option>
        <option value="base">Base</option>
        <option value="optimism">Optimism</option>
        <option value="linea">Linea</option>
      </select>

      <button onClick={handleSearch}>Search</button>

      {showResults && (
        <SearchResult results={results} />
      )}
    </div>
  );
}

export default App;
