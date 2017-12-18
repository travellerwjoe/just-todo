import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import MoreVert from 'material-ui-icons/MoreVert'
// import Menu, { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Header extends Component {
    static propTypes = {
        title: PropTypes.string,
    }
    state = {
        anchorEl: null
    }
    handleMenu = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    render() {
        const { classes, title } = this.props
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        return (
            <header>
                <AppBar>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="contrast"
                            >
                                <MoreVert />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default withStyles(styles)(Header)