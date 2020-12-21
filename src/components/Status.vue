<template>
  <div class="status-bar">

      <p> Complete Todo </p>
      <ul>
          <li v-for="todo in competeTodo" :key="todo.id">

              {{todo.title}}
          </li>
          
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name : 'Status',
    computed: mapGetters(['competeTodo'])
        
    

}
</script>

<style>
.status-bar {
    padding : 5px ; 
    text-align: center ; 
    background : rgb(240,240,240);
    color : black ; 
    
}
.status-bar ul {
    list-style:  none ;
}

</style>