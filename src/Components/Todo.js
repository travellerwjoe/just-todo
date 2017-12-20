import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'
import TodoAddButton from './TodoAddButton'
import TodoEditDialog from './TodoEditDialog'
import mobx, { observable, computed } from 'mobx'
import todoStore from '@/Store/TodoStore'
import { observer } from 'mobx-react';

@observer
export default class Todo extends Component {
    static propTypes = {
        // prop: PropTypes
    }

    render() {
        const { children } = this.props
        return (
            <article>
                <TodoList store={todoStore} />
                <TodoAddButton store={todoStore.todoDialogStore} />
                {todoStore.todoDialogStore.open && <TodoEditDialog store={todoStore} />}
            </article>
        )
    }
}
