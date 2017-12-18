import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from 'material-ui'
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    todoItem: {
        width: '100%'
    }
}

class ToDoItem extends Component {
    static propTypes = {
        // prop: PropTypes
        children: PropTypes.string.isRequired
    }
    state = {
        checked: false
    }
    handleChange = (e) => {
        console.log(e.currentTarget)
        const checked = !this.state.checked
        this.setState({
            checked
        })
    }
    render() {
        const { children, classes } = this.props
        const { checked } = this.state
        return (
            <FormControlLabel
                className={classes.todoItem}
                control={
                    <Checkbox
                        checked={checked}
                        onChange={this.handleChange}
                        value="1"
                    />
                }
                label={children}
            />
        )
    }
}

export default withStyles(styles)(ToDoItem)