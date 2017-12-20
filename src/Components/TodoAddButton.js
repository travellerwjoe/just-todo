import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import withStyles from 'material-ui/styles/withStyles'
import { observer } from 'mobx-react'

const styles = {
    button: {
        position: 'fixed',
        right: '20px',
        bottom: '20px'
    }
}

@observer
class TodoAddButton extends Component {
    static propTypes = {
        // prop: PropTypes
    }

    openDialog = () => {
        const { store } = this.props
        store.show()
    }

    render() {
        const { classes, status } = this.props
        return (
            <Button fab color="primary" aria-label="add" className={classes.button} onClick={this.openDialog}>
                <AddIcon />
            </Button>
        )
    }
}

export default withStyles(styles)(TodoAddButton)