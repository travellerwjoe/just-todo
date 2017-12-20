import mobx, { observable, computed } from 'mobx'

/**
 * Todo对话框store
 */
export class TodoDialogStore {
    constructor() {
        mobx.autorun(() => {
            // this.status
            // this.statusText
        })
    }

    /**
     * 打开状态
     */
    @observable
    open = false

    /**
     * todo任务ID，无值表示添加
     */
    @observable
    todoID = null

    /**
     * 显示状态：添加/编辑
     */
    @computed
    get status() {
        return this.todoID ? 'edit' : 'add'
    }

    /**
     * 显示状态文本
     */
    @computed
    get statusText() {
        return this.ENUM_STATUS[this.status]
    }
    

    ENUM_STATUS = {
        'edit': '编辑',
        'add': '添加'
    }

    /**
     * 打开对话框
     * @param {*} id todo任务ID，有表示编辑，无表示添加
     */
    show(id) {
        this.open = !this.open
        this.todoID = id
    }

    /**
     * 关闭对话框
     */
    close() {
        this.open = false
    }
}

export default new TodoDialogStore()