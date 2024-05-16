<script>
    export default {
        data() {
            return {
                walletAddresses: ''
            };
        }
    };
</script>

<template>
    <div>
        <label for="walletAddresses">Ethereum Wallet Address:</label>
        <textarea id="walletAddresses" v-model="walletAddresses" rows="4" cols="50"></textarea>
    </div>
</template>