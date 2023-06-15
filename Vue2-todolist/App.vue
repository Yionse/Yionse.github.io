<template>
  <div id="app">
    <MyHeader :addTodo="addTodo"/>
    <MyList :todos="todos" :updateTodo="updateTodo" :removeTodo="removeTodo"/>
    <MyFooter :total="total" :doneCount="doneCount" :clearAll="clearAll"/>
  </div>
</template>

<script>
  import MyHeader from '../src/components/MyHeader.vue';
  import MyList from '../src/components/MyList.vue';
  import MyFooter from '../src/components/MyFooter.vue';

  export default {
    name: 'App',
    components: {
      MyHeader,
      MyList,
      MyFooter
    },
    data(){
      return {
        todos: JSON.parse(localStorage.getItem('vue_todolist')) || []
      };
    },
    computed: {
      total() {
        return this.todos.length;
      },
      doneCount() {
        return this.todos.reduce((pre, cur) => {
          if (cur.done) pre++;
          return pre;
        }, 0);
      }
    },
    methods: {
      // 添加一条
      addTodo(value) {
        this.todos.unshift(value);
      },
      // 修改
      updateTodo(id) {
        this.todos.forEach(item => {
          if (item.id === id) item.done = !item.done;
        });
      },
      // 删除
      removeTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id);
      },
      clearAll() {
        this.todos = this.todos.filter(item => !item.done);
      }
    },
    watch: {
      todos: {
        deep: true,
        handler(value){
          localStorage.setItem('vue_todolist', JSON.stringify(value));
        }
      }
    }
  }
</script>

<style lang="less">
  #app {
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;
    margin: 100px auto;
    padding: 10px;
  }
  button {
    float: right;
    width: 80px;
    background-color: red;
    margin-top: 8px;
    outline: none;
    border: none;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid black;
    }
  }
</style>