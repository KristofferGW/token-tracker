<script>
import WalletAddressesInput from './components/WalletAddressesInput.vue';
import TokenContractsInput from './components/TokenContractsInput.vue';
import SearchButton from './components/SearchButton.vue';

export default {
  components: {
    WalletAddressesInput,
    TokenContractsInput,
    SearchButton
  },
  methods: {
    search() {
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