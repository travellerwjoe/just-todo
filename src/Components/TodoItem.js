import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from 'material-ui'

export default class ToDoItem extends Component {
    static propTypes = {
        // prop: PropTypes
        children:PropTypes.string.isRequired
    }
    state = {
        checked: false
    }
    handleChange = () => {
        const checked = !this.state.checked
        this.setState({
            checked
        })
    }
    render() {
        const { children } = this.props
        const { checked } = this.state
        return (
            <section className="todo-item">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={this.handleChange}
                            value="1"
                        />
                    }
                    label={children}
                />
            </section>
        )
    }
}
