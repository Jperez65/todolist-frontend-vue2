<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <Todo></Todo>
      <Createtodo></Createtodo>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
import Createtodo from '@/components/module/Createtodo.vue'
export default {
  name: 'App',
  components: {
    Todo,
    Createtodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  text-align: center;
}
</style>
