import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'


const styles = {
    container: {
        paddingTop: '80px'
    }
}

class Container extends Component {
    render() {
        const { classes, children } = this.props
        return (
            <article className={classes.container}>
                {children}
            </article>
        )
    }
}

export default withStyles(styles)(Container)