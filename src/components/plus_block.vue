<template>
    <center>
        <div class="circle" v-on:click="openModal"><b>+</b></div>
        <modal v-if="this.$store.getters.show"></modal>
    </center>
</template>

<script>
    import modal from './modal'

    export default {
        name: "plus_block",
        components: {
            modal
        },
        methods: {
            openModal() {
                this.$store.commit('changeShow')
            }
        }
    }
</script>

<style scoped>
    .circle {
        width: 30px;
        height: 30px;
        font-size: 22px;
        background: #42b983;
        border-radius: 50%;
        padding-left: .05%;
        margin-bottom: 10px;
        cursor: pointer;
    }
</style>