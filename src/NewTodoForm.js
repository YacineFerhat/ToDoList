import React, { Component } from 'react';
import uuid from 'uuid/v4'
import './NewTodoForm.css'

class NewTodoForm extends Component{
    constructor(props){
        super(props)
        this.state={
            task : '',
            id: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSumbit(evt){
        evt.preventDefault ()
        this.props.createTodo({...this.state , completed: false, id : uuid()})
        this.setState({task : ' '})
    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSumbit}>
                <label htmlFor="task">New task</label>
                <input 
                    id="task" 
                    type="text" 
                    placeholder="New task"
                    name ='task'
                    value={this.state.task}
                    onChange={this.handleChange}/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;