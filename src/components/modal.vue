<template>
    <div>
        <center>
            <input type="text" v-model="name"/><br>
            <input type="button" v-on:click="addBlock(name)" value="Жми!">
        </center>
    </div>
</template>

<script>
    export default {
        name: "modal",
        data() {
            return {
                name: ''
            }
        },
        methods: {
            addBlock(name) {
                if (name.length > 0) this.$store.dispatch('addBlock', name);
                else alert('Введите имя')
            }
        }
    }
</script>

<style scoped>

</style>