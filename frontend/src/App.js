import React, { useState } from 'react';
import './App.css';

function App() {
  const [ethAddresses, setEthAddresses] = useState('');
  const [tokenAddresses, setTokenAddresses] = useState('');
  const [selectedChain, setSelectedChain] = useState('');

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

  const handleSearch = () => {
    console.log('Wallet addresses: ', ethAddresses);
    console.log('Token contract addresses: ', tokenAddresses);
    console.log('Selected Chain: ', selectedChain);
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
    </div>
  );
}

export default App;
