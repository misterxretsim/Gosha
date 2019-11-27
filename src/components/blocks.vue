<template>
    <center>
        <div v-for="block in this.$store.getters.blocks" v-bind:key="block.id" class="blocks">
            <h3>{{ block.name }}</h3>
            <my_delete :block_id="block.id"/>
        </div>
    </center>
</template>

<script>
    import my_delete from './my_delete.vue'

    export default {
        name: "blocks",
        components: {
            my_delete
        }
    }
</script>

<style scoped>
    .blocks {
        width: 100px;
        height: 100px;
        background: lightgrey;
        border: 1px solid grey;
    }
</style>