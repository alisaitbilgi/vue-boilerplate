<template>
  <form class="todo-form-wrapper" v-on:submit.prevent="handleToSetTodoItem">
    <div class="todo-item-text-wrapper">
      <div class="todo-item-type-selector">
        <v-select
          :items="todoTypeSelections"
          label="Travel"
          :single-line="true"
          @change="setTodoType"
        ></v-select>
      </div>
      <input
        name="ali"
        id="todo-item-text-input"
        class="todo-item-text"
        autocomplete="off"
      />
    </div>
    <button class="todo-add-btn" v-on:click="handleToSetTodoItem">
      ADD
    </button>
  </form>
</template>

<script>
import {setTodoItem, getTodoList} from '../utils/utils.js'
import $store from '../store/index.js'

export default {
  props: {
    todoTypeSelections: {
      type: Array
    },
    selectedTodoType: {
      type: String
    }
  },
  methods: {
    setTodoType: function (type) {
      $store.commit('SET_TODO_TYPE', type)
      getTodoList(type)
    },
    handleToSetTodoItem: function () {
      const todoItemInput = document.querySelector('#todo-item-text-input')
      const todoItemText = todoItemInput.value.trim()

      if (todoItemText !== '') {
        setTodoItem(this.selectedTodoType, todoItemText)
        todoItemInput.value = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-form-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100 - 110px);
    height: 40px;
    padding: 10px 0;

    .todo-item-text-wrapper {
      display: flex;
      width: 100%;
      padding: 0 10px;

      .todo-item-type-selector {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 39px;
      }

      .todo-item-text {
        width: 250px;
        height: 15px;
        border-radius: 4px;
        background-color: #ffffff;
        border: solid 1px #d4d4d4;
        padding: 10px;
        position: relative;
        left: 100px;
      }
    }
    .todo-add-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 35px;
      border-radius: 4px;
      background-color: #0088ff;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }
  }
</style>
<style lang="scss">
  .v-menu__content {
    top: 40px!important;
    left: 0!important;
    margin-left: -10px;
    background-color: #fff;
  }
  .v-text-field {
    .v-label--active {
      transform: none;
    }
  }
  .v-text-field {
    .v-input__slot{
      border: 0.5px solid #e3e3e3;
      border-radius: 2px;
      padding: 0 10px;
      &:before {
        border: none;
      }
    }
  }
</style>
