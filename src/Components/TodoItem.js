import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from 'material-ui'
import classnames from 'classnames'
import withStyles from 'material-ui/styles/withStyles'
import todoStore from '@/Store/TodoStore'

const styles = {
    todoItem: {
        width: '100%'
    },
    completed: {
        textDecoration: 'line-through',
        color: '#bbb',
        '& span:last-child': {
            color: '#bbb'
        }
    },
    label: {
        color: 'grey'
    }
}

@withStyles(styles)
export default class ToDoItem extends Component {
    static propTypes = {
        // prop: PropTypes
        children: PropTypes.string.isRequired
    }

    /*     state = {
            checked: false
        }
     */
    /* constructor(props) {
        super(props)
        const { task } = props
        this.state = {
            checked: task.complete
        }
    } */

    handleChange = (e, task) => {
        // const checked = !this.state.checked
        /* this.setState({
            checked
        }) */
        const id = task.id
        const complete = !task.complete
        todoStore.updateTodo({
            id,
            complete
        })
    }

    handleClick = (e, id) => {
        //如果点击的元素并非checkbox，阻止默认label行为
        if (e.target !== this.checkbox) {
            e.preventDefault()
            todoStore.todoDialogStore.show(id)
        }

    }

    render() {
        const { children, classes, task } = this.props
        // const { checked } = this.state
        return (
            <FormControlLabel
                className={classnames(classes.todoItem, { [classes.completed]: task.complete })}
                // classes={{ label: classes.label }}
                control={
                    <Checkbox
                        checked={task.complete}
                        onChange={(e) => this.handleChange(e, task)}
                        inputRef={(checkbox) => { this.checkbox = checkbox }}
                        id={task.id}
                        value="1"
                    />
                }
                label={children}
                onClick={(e) => this.handleClick(e, task.id)}
            />
        )
    }
}