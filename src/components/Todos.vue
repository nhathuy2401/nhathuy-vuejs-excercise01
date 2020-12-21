<template>
<div class="todo-list">
    <ul>
        <li v-for="todo in todos " :key="todo.id">

            {{todo.title}}
        </li>


    </ul>


</div>
  
</template>

<script>
export default {
    name :'Todos',
    

}
</script>


<style scoped >

.todo-list ul {
    list-style: none ;
    padding :  10px 10px 10px ; 
}
.todo-list li {
    padding:  10px ;
    cursor: pointer;
    margin : 10px 0px ; 
    border-radius: 10px ;
    background : rgb(240,240,240);
    color : black  ; 
}

</style>