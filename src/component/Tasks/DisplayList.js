import React from 'react';
import {withRouter} from 'react-router-dom';
import './DisplayList.css';

class DisplayList extends React.Component{
    listTodo= ({TodoList})=>{
        if(TodoList) {
            return TodoList.map((task)=>{
                return(
                    <div className="taskBox" key={task._id}>
                        <div className="taskDetails">
                            <h3 className="heading">{task.title}</h3>
                            <p className="description">{task.details}</p>
                            <p className="status">Status: {task.status}</p>
                            <p className="status">Start date: {task.start}</p>
                            <p className="status">End date: {task.end}</p>
                        </div>
                        <button className="btn btn-danger"
                        onClick={()=>this.editHandler(task._id)}>
                            <i className="fa fa-edit"> &nbsp;</i>Edit</button> &nbsp;
                        <button className="btn btn-danger"
                        onClick={()=>this.deleteHandler(task._id)}><i className="fa fa-remove"> &nbsp;</i>Delete</button>
                    </div>
                )
            })
        }    
    }
    addNewTask =(props)=>{
        // console.log(props)
        props.history.push('/add')
       
    }
    deleteHandler=(id)=>{
        
        // WE CAN DO THE BELOW ALSO
        // this.props.history.push(`/del/${id}`)
               
        const delUrl =`http://localhost:9700/todo/delete`
        fetch(`${delUrl}/${id}`,{method:'DELETE'})
        .then(window.location.reload())
    }
    editHandler=(id)=>{
        // console.log(id)
        this.props.history.push(`/edit/${id}`)
    }
    render(){
        return(        
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-h3-heading">Todo List</h3>
                        <div className="addNew">
                            <button className="btn btn-danger"
                            onClick={()=>this.addNewTask(this.props)}>Add New task</button>
                        </div>
                    </div>              
                
                    <div className="panel-body">
                        <div className="task-main-container">
                          {this.listTodo(this.props)}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(DisplayList);
    