import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)


const storeData = {
    state: {
        todos: [
            { id: 1, title: "todo 1 ", completed: false },
            { id: 1, title: "todo 1 ", completed: false },
            { id: 1, title: "todo 1 ", completed: false },
            { id: 1, title: "todo 1 ", completed: false },
        ]
    }
}
const store = new Vuex.Store(storeData);

export default store;