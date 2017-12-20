import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui';
import { observer } from 'mobx-react'
import { debug } from 'util';

@observer
export default class TodoEditForm extends Component {
    static propTypes = {
        // prop: PropTypes
    }

    /* state = {
        task: ''
    } */

    constructor(props) {
        super(props)
        const { currentTodo } = props.store
        this.state = {
            task: currentTodo.task || ''
        }
        console.log(this.state)
    }

    /*    componentWillReceiveProps(nextProps) {
           debugger
           this.setState({
               task: nextProps.store.currentTodo
           })
       }
   
       shouldComponentUpdate(prevProps, prevState) {
           const { currentTodo } = prevProps.store
           console.log(currentTodo.task)
           if (currentTodo.task) {
               this.setState({
                   task: currentTodo.task
               })
               return true
           }
       }
    */


    handleClose = () => {
        const { todoDialogStore } = this.props.store
        todoDialogStore.close()
    }

    handleChangeText = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    saveTodo = (id) => {
        const { store } = this.props
        const { task } = this.state
        //新增
        if (!id) {
            store.addTodo(task)
        } else {
            store.updateTodo(id, task)
        }
        this.setState({
            task: ''
        })
        this.handleClose()
    }

    render() {
        const { todoDialogStore } = this.props.store
        const { task } = this.state
        return (
            <Dialog
                open={todoDialogStore.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{todoDialogStore.statusText}任务</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occationally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="task"
                        label="接下来需要做什么..."
                        value={task}
                        onChange={this.handleChangeText}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        取消
                    </Button>
                    <Button onClick={() => this.saveTodo(todoDialogStore.todoID)} color="primary">
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
