<script>
export default {
  data() {
    return {
      tokenContracts: ''
    };
  }
};
</script>

<template>
    <div>
      <label for="tokenContracts">Token Contract Addresses:</label>
      <textarea id="tokenContracts" v-model="tokenContracts" rows="4" cols="50"></textarea>
    </div>
  </template>