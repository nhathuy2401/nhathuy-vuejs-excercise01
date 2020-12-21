import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)


const storeData = {
    state: {
        todos: [
            { id: 1, title: "todo 1 ", completed: true },
            { id: 2, title: "todo 2 ", completed: false },
            { id: 3, title: "todo 4 ", completed: true },
            { id: 4, title: "todo 5 ", completed: false }
        ]
    },
    getters: {
        competeTodo: state => state.todos.filter(todo => todo.completed)

    },
    mutations: {
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
        }

    }

}
const store = new Vuex.Store(storeData);

export default store;