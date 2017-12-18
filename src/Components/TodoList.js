import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import withStyles from 'material-ui/styles/withStyles'
import { FormGroup, FormLabel } from 'material-ui'

const styles = {
    todoList: {
        paddingLeft: '15px',
        marginBottom: '15px'
    }
}

class TodoList extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired
    }

    render() {
        const { classes, label } = this.props
        return (
            <section className={classes.todoList}>
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup>
                    <TodoItem>事项1</TodoItem>
                    <TodoItem>事项2</TodoItem>
                    <TodoItem>事项3</TodoItem>
                </FormGroup>
            </section>
        )
    }
}

export default withStyles(styles)(TodoList)