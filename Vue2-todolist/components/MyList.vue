<template>
  <ul id="list">
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="updateTodo(todo.id)">
      <span>{{todo.title}}</span>
      <button @click="removeTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'MyList',
    props:["todos", "updateTodo", "removeTodo"]
  }
</script>

<style lang="less" scoped>
  #list {
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    border: 1px solid black;
    padding: 0;
    margin-bottom: 0;
    li {
    box-sizing: border-box;
    list-style: none;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    padding: 0 20px;
    opacity: 1;
    button {
      display: none;
    }
    &:hover {
      opacity: .5;
      button {
        display: block;
      }
    }
    span {
      margin-left: 10px; 
    }
  }
}
</style>