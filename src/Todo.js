import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state ={
            isEditig : false,
            task :this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }

    toggleForm(){
        this.setState({
            isEditig : !this.state.isEditig
        })
    }

    handleUpdate(evt){
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState ({
            isEditig : false 
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleToggle(){
        this.props.toggleTodo(this.props.id)
    }
  

    render(){
        let result
        if(this.state.isEditig){
            result = (
                <div className="Todo">
                    <form className="TodoForm" onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            name='task'
                            onChange={this.handleChange} 
                            value={this.state.task}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );    
        }
        else {
            result = (
                <div className="Todo">
                    
                    <li 
                        className={this.props.completed 
                            ? 'TodoTask completed ' 
                            : 'TodoTask'}
                        onClick={this.handleToggle}     
                    >
                        {this.props.task}
                    </li>
                    <div className="TodoButtons"> 
                        <button onClick = {this.toggleForm}>
                            <i className='fas fa-pen'/>
                        </button>
                        <button onClick = {this.handleRemove}>
                            <i className='fas fa-trash'/>
                        </button>
                    </div>
                </div>
            )
        }
        return(
            result 
        )
    }
}

export default Todo; 