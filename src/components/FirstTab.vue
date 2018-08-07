<template>
  <div class="first-tab-container">
    <div class="todo-app-container">
      <form class="todo-add-wrapper" v-on:submit.prevent="setTodoItem">
        <div class="todo-item-text-wrapper">
          <input id="todo-item-text-input" class="todo-item-text" placeholder="What To Do?" autocomplete="off"/>
        </div>
        <div class="todo-add-btn" v-on:click="setTodoItem">
          ADD
        </div>
      </form>
      <div class="todo-list-wrapper">
        <div class="todo-list-header">
          <div class="each-todo-item-text">
            Description
          </div>
          <div class="each-todo-item-date">
            Date
          </div>
          <div class="each-todo-item-remove-icon">
            Remove
          </div>
        </div>
        <div class="todo-list-content">
          <div v-bind:key="eachTodoItem.text" v-for="eachTodoItem in todoItemList" class="each-todo-item">
            <div class="each-todo-item-text">{{eachTodoItem.text}}</div>
            <div class="each-todo-item-date">{{eachTodoItem.date}}</div>
            <div class="each-todo-item-remove-icon">
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $store from '../store/index.js'

export default {
  computed: {
    todoItemList: function () {
      return $store.state.todoItemList
    }
  },
  methods: {
    setTodoItem: function () {
      const todoItemInput = document.querySelector('#todo-item-text-input')
      const todoItemText = todoItemInput.value.trim()
      const todoItemTbAdded = {
        text: todoItemText,
        date: new Date()
      }

      if (todoItemText !== '') {
        $store.commit('SET_CURRENT_TODO', todoItemTbAdded)
        todoItemInput.value = ''
      }
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
    height: 100%;

    .todo-app-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: calc(100% - 50px);
      max-width: 800px;
      height: calc(100% - 25px);
      padding: 15px 0 10px 0;

      .todo-add-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 40px;
        padding: 10px 0;

        .todo-item-text-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          .todo-item-text {
            width: calc(100% - 60px);
            max-width: 300px;
            height: 15px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d4d4d4;
            padding: 10px;
            position: relative;
            left: 35px;
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
      .todo-list-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 450px;

        .todo-list-header {
          display: flex;
          justify-content: space-between;
          height: 20px;
          margin-bottom: 10px;
          padding: 0 15px;
        }
        .todo-list-content {
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid #e3e3e3;
          border-radius: 10px;
          padding: 0 15px;

          .each-todo-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #e3e3e3;
          }
          &:last-child {
            border-bottom: none;
          }
        }
        .each-todo-item-text {
          display: block;
          width: 40%;
          max-width: 40%;
          height: 22px;
          max-height: 22px;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
        .each-todo-item-date {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40%;
          height: 22px;
          max-height: 22px;
        }
        .each-todo-item-remove-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10%;
          height: 22px;
          max-height: 22px;
        }
      }
    }
  }
</style>
