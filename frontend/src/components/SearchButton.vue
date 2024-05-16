<script>
export default {
    methods: {
        search() {
            this.$emit('search');
        }
    }
}
</script>

<template>
    <div>
        <button @click="search"></button>
    </div>
</template>