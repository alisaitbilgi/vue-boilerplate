<template>
  <div class="first-tab-container">
    <div class="todo-app-container">
      <TodoForm v-bind:todo-type-selections="todoTypeSelections" v-bind:selected-todo-type="selectedTodoType"/>
      <TodoList v-bind:todo-item-list="todoItemList" v-bind:selected-todo-type="selectedTodoType"/>
    </div>
  </div>
</template>

<script>
import $store from '../store/index.js'
import {getTodoList} from '../utils/utils.js'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

export default {
  mounted () {
    getTodoList(this.selectedTodoType)
  },
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    todoItemList: function () {
      return $store.state.todoItemList[this.selectedTodoType]
    },
    todoTypeSelections: function () {
      return ['Travel', 'Work', 'Shopping']
    },
    selectedTodoType: function () {
      return $store.state.selectedTodoType
    }
  }
}
</script>

<style lang="scss" scoped>
  .first-tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 30px);
    position: relative;
    top: 30px;

    .todo-app-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: calc(100% - 50px);
      max-width: 800px;
      height: calc(100% - 25px);
      padding: 15px 0 10px 0;
    }
  }
</style>
