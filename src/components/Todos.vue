<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : ''">
        {{ todo.title }}

        <input type="checkbox" :checked="todo.completed" @change="markTodoCompleted(todo.id)" />
        <button type="submit">Done</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Todos",
  computed: mapState(['todos']),

  methods : {
      markTodoCompleted(todoId){
          this.$store.commit('MARK_COMPLETE',todoId)
      }

  }
    
  
};
</script>


<style scoped >
.todo-list ul {
  list-style: none;
  padding: 10px 10px 10px;
}
.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0px;
  border-radius: 10px;
  background: rgb(240, 240, 240);
  color: black;
}
.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}
.todo-list li button {
  float: right;
  margin-right: 20px;
}

.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.todo-list li.completed {
  background: rgb(119, 218, 243);
}
</style>