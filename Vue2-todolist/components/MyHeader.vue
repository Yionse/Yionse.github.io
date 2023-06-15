<template>
  <div>
    <input type="text" placeholder="请输入要做的事儿，并按下Enter" @keydown.enter="myAdd">
  </div>
</template>

<script>
  import {nanoid} from 'nanoid';
  export default {
    name: 'MyHeader',
    methods: {
      myAdd(e) {
        this.addTodo({id:nanoid(), title: e.target.value, done: false});
        e.target.value = "";
      }
    },
    props: ["addTodo"]
  }
</script>

<style scoped>
  input{
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 1px solid black;
    padding-left: 20px;
    outline: none;
  }
</style>