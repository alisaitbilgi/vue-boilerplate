<template>
  <div class="todo-list-wrapper">
    <div v-if="todoItemList.length > 0" class="todo-list-header">
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
    <div v-if="todoItemList.length > 0" class="todo-list-content">
      <div v-bind:key="eachTodoItem.id" v-for="eachTodoItem in todoItemList" class="each-todo-item">
        <div class="each-todo-item-text">{{eachTodoItem.description}}</div>
        <div class="each-todo-item-date">{{moment(eachTodoItem.created).format('LLL')}}</div>
        <div v-bind:id="eachTodoItem.id" class="each-todo-item-remove-icon" v-on:click="handleToRemoveTodoItem">
          X
        </div>
      </div>
    </div>
    <div class="empty-list-explanation" v-if="todoItemList.length === 0">
      You have nothing TO DO, right ?
    </div>
  </div>
</template>

<script>
import {removeTodoItem} from '../utils/utils.js'
import moment from 'moment'

export default {
  props: {
    todoItemList: {
      type: Array
    },
    selectedTodoType: {
      type: String
    }
  },
  methods: {
    handleToRemoveTodoItem: function (e) {
      const todoItemTbRemoved = e.target && e.target.id

      if (todoItemTbRemoved) {
        removeTodoItem(this.selectedTodoType, todoItemTbRemoved)
      }
    },
    moment
  }
}
</script>

<style lang="scss" scoped>
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

      .each-todo-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 30px);
        height: 40px;
        border-bottom: 1px solid #e3e3e3;
        padding: 0 15px;
        overflow-x: hidden;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .empty-list-explanation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
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
</style>
