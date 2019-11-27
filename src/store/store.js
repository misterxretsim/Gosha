import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blocks: [],
    show: false
  },
  actions: {
    getBlocks(ctx) {
      ctx.commit('updateBlocks', [
        {
          id: 1,
          name: 'Первый'
        },
        {
          id: 2,
          name: 'Второй'
        },
        {
          id: 3,
          name: 'Третий'
        }
      ])
    },
    addBlock(ctx, name) {
      ctx.commit('changeShow');
      ctx.commit('addBlock', name)
    },
    deleteBlock(ctx, id) {
      ctx.commit('deleteBlock', id)
    }
  },
  mutations: {
    updateBlocks(state, blocks) {
      state.blocks = blocks
    },
    changeShow(state) {
      state.show = !state.show
    },
    addBlock(state, name) {
      state.blocks.push({id: state.blocks.length + 1, name: name})
    },
    deleteBlock(state, id) {
      state.blocks.forEach((block, index, object) => {
        if (block.id === id) object.splice(index, 1)
      })
    }
  },
  getters: {
    blocks: (state) => state.blocks,
    show: (state) => state.show
  }
})
