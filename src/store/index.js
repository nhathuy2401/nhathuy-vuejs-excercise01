import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'


Vue.use(Vuex)


const storeData = {
    state: {
        todos: []
    },
    actions: {

        deleteTodo({ commit }, todoId) {
            commit('DELETE_TODO', todoId)
        },
        addTodo({ commit }, newTodo) {
            commit('ADD_TODO', newTodo)
        },

        async getTodos({ commit }) {
            try {
                const reponse = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('SET_TODOS', reponse.data)

            } catch (error) {
                console.log(error)

            }
        }

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
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo);

        },
        SET_TODOS(state, todos) {
            state.todos = todos
        }

    }

}
const store = new Vuex.Store(storeData);

export default store;