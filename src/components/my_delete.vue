<template>
    <center v-on:click="deleteBlock(block_id)">
        <b>x</b>
    </center>
</template>

<script>
    export default {
        name: "my_delete",
        props: {
            block_id: null
        },
        methods: {
            deleteBlock(id) {
                this.$store.dispatch('deleteBlock', id)
            }
        }
    }
</script>

<style scoped>
    center{
        cursor: pointer;
        background: indianred;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-top: 5px;
        color: red;
        font-size: 25px;
    }
</style>