<template>
  <div class="first-tab-container">
    <div class="todo-app-container">
      <form class="todo-add-wrapper" v-on:submit.prevent="handleToSetTodoItem">
        <div class="todo-item-text-wrapper">
          <div class="todo-item-type-selector">
            <v-select
              :items="todoTypeSelections"
              label="Select Todo Type"
              :single-line="true"
            ></v-select>
          </div>
          <input id="todo-item-text-input" class="todo-item-text" placeholder="What To Do?"
                 autocomplete="off"/>
        </div>
        <button class="todo-add-btn" v-on:click="handleToSetTodoItem">
          ADD
        </button>
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
          <div v-bind:key="eachTodoItem.id" v-for="eachTodoItem in todoItemList" class="each-todo-item">
            <div class="each-todo-item-text">{{eachTodoItem.description}}</div>
            <div class="each-todo-item-date">{{eachTodoItem.created}}</div>
            <div v-bind:id="eachTodoItem.id" class="each-todo-item-remove-icon" v-on:click="handleToRemoveTodoItem">
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
import {getTodoList, setTodoItem, removeTodoItem} from '../utils/utils.js'

export default {
  mounted () {
    getTodoList('shopping')
  },
  computed: {
    todoItemList: function () {
      return $store.state.todoItemList
    },
    todoTypeSelections: function () {
      return ['Travel', 'Work', 'Personal']
    }
  },
  methods: {
    handleToSetTodoItem: function () {
      const todoItemInput = document.querySelector('#todo-item-text-input')
      const todoItemText = todoItemInput.value.trim()

      if (todoItemText !== '') {
        setTodoItem('shopping', todoItemText)
        todoItemInput.value = ''
      }
    },
    handleToRemoveTodoItem: function (e) {
      const todoItemTbRemoved = e.target && e.target.id

      if (todoItemTbRemoved) {
        removeTodoItem('shopping', todoItemTbRemoved)
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
          padding: 0 20px 0 15px;
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
          cursor: pointer;
        }
      }
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
