<script>
import WalletAddressesInput from './components/WalletAddressesInput.vue';
import TokenContractsInput from './components/TokenContractsInput.vue';

export default {
  components: {
    WalletAddressesInput,
    TokenContractsInput
  },
  methods: {
    search() {
      // You can perform your search functionality here
      console.log("Searching with Wallet Addresses:", this.$refs.walletAddressesInput.walletAddresses);
      console.log("Searching with Token Contracts:", this.$refs.tokenContractsInput.tokenContracts);
    }
  }
};
</script>

<template>
    <div>
      <wallet-addresses-input></wallet-addresses-input>
      <token-contracts-input></token-contracts-input>
      <div>
        <button @click="search">Search</button>
      </div>
    </div>
  </template>