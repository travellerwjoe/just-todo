import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import withStyles from 'material-ui/styles/withStyles'
import { FormGroup, FormLabel } from 'material-ui'
import { observer } from 'mobx-react'

const styles = {
    todoList: {
        paddingLeft: '15px',
        marginBottom: '15px'
    }
}

@observer
class TodoList extends Component {
    static propTypes = {
        // label: PropTypes.string.isRequired
    }

    render() {
        const { classes, label, store, list } = this.props
        return ([
            <section className={classes.todoList} key="uncomplete">
                <FormLabel component="legend">未完成</FormLabel>
                <FormGroup>
                    {store.uncompleteTodoList.map((item,index) => <TodoItem task={item} key={index}>{item.task}</TodoItem>)}
                </FormGroup>
            </section>,
            <section className={classes.todoList} key="completed">
                <FormLabel component="legend">已完成</FormLabel>
                <FormGroup>
                    {store.completedTodoList.map((item,index) => <TodoItem task={item} key={index}>{item.task}</TodoItem>)}
                </FormGroup>
            </section>
        ])
    }
}

export default withStyles(styles)(TodoList)