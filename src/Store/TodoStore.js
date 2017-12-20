import mobx, { observable, computed } from 'mobx'
// import { TodoDialogStore } from './TodoDialogStore'
import todoDialogStore from './TodoDialogStore'
import { debug } from 'util';

export class TodoStore {
    constructor() {
        // this.todoDialogStore = new TodoDialogStore()
        this.todoDialogStore = todoDialogStore
        mobx.autorun(() => {
            this.uncompleteTodoList
            this.completedTodoList,
                this.currentTodo
        })
    }

    /**
     * todo任务列表
     */
    @observable
    todoList = []

    /**
     * 未完成todo任务列表
     */
    @computed
    get uncompleteTodoList() {
        return this.todoList.filter(item => !item.complete)
    }

    /**
     * 已完成todo任务列表
     */
    @computed
    get completedTodoList() {
        return this.todoList.filter(item => item.complete)
    }

    /**
     * 当前选择的todo
     */
    @computed
    get currentTodo() {
        const id = this.todoDialogStore.todoID
        const search = this.todoList.filter(item => item.id === id)
        return search.length ? search[0] : {}
    }

    /**
     * 添加todo任务
     * @param {*} task 任务名
     */
    addTodo(task) {
        const id = Math.random().toString(32).substr(2)
        this.todoList.push({
            id,
            task,
            complete: false
        })
    }

    /**
     * 更新todo任务
     * @param {*} param0 
     */
    updateTodo({ id, task, complete }) {
        const todo = this.findTodo(id)
        if (todo) {
            typeof task !== 'undefined' && (todo.task = task)
            typeof complete !== 'undefined' && (todo.complete = !!complete)
        }
    }

    /**
     * 根据todoID查找todo
     * @param {*} id 
     */
    findTodo(id) {
        const search = this.todoList.filter(item => item.id === id)
        return search.length && search[0]
    }
}

export default new TodoStore()