<template>
  <div id="app">
    <Todos></Todos>
    <Status></Status>
    
  </div>
</template>

<script>
import Todos from './components/Todos'
import Status from './components/Status'

export default {
  name: 'App',
  components: {
    Todos,
    Status 

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background : rgb(219,219,219);
  margin : 20px auto ; 


}
</style>
