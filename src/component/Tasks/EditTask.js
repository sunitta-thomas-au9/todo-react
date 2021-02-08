import React from 'react';
// const getTask = 'http://localhost:9700/todo'
// const editUrl ='http://localhost:9700/todo/edit'
const getTask = 'https://todo1-node-app.herokuapp.com/todo'
const editUrl ='https://todo1-node-app.herokuapp.com/todo/edit'
// let date = new Date();
// let cur = date.getDate();
// let days = 7
// let end = date.setDate(cur + days)

class EditTask extends React.Component{
    constructor(){
        super();
        this.state={
            _id:'',
            title:'',
            details:'',
            start:'',
            end:'',
            status:''
        }
    }
    componentDidMount() {
        // console.log(this.state)
        fetch(`${getTask}/${this.props.match.params.id}`)
        .then(data=>data.json())
        .then(resp=>this.setState({
            _id:resp._id,
            title:resp.title,
            details:resp.details,
            start:resp.start,
            end:resp.end,
            status:resp.status
            }))
    }
    editHandler=()=>{
        // console.log(this.props.history)
        // console.log(this.state)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch(`${editUrl}`,requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ _id: data._id }))
        .then(this.props.history.push('/'))
    }
    changeHandler=(name,value)=>{
        
        this.setState({
            ...this.state,[name]:value
        })
        // console.log(this.state.task)
    }
    render(){
        // console.log(this.props.match.params.id);
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h4>Edit the task</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="title">Task Title</label>
                            <input name="title" value={this.state.title} className="form-control"
                            onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Task Description</label>
                            <input name="details" value={this.state.details} className="form-control"
                            onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>                            
                            <select name="status" value={this.state.status} className="form-control"
                            onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}>
                                <option name="status" value="pending">pending</option>
                                <option name="status" value="completed">completed</option>
                            </select>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="start">Start Date</label>
                            <input type="date" name="start" value={this.state.start} className="form-control"
                            onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end">End Date</label>
                            <input type="date" name="end" value={this.state.end} className="form-control"
                            onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                            />
                        </div>
                        
                        <button className="btn btn-danger"
                        onClick={this.editHandler}>Update Task</button>
                        

                    </div>

                </div>
            </div>
        );
    }
}

export default EditTask;