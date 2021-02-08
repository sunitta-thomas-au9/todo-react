import React from 'react';
// const postUrl = 'http://localhost:9700/todo/addTask';
const postUrl = 'https://todo1-node-app.herokuapp.com/todo/addTask';

class AddNewTask extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            details:'',
            start: this.curDate(),
            end: this.curDate(),
            status:'pending'
        }
    }
    changeHandler=(key,value)=>{
        this.setState({
            ...this.state,
            [key]:value
        })
    }
    addHandler=()=>{
        fetch(postUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
            
        })
        .then(this.props.history.push('/home'))
        

    }
    curDate = () => {
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        let today = year + "-" + month + "-" + day; 
        return today
    }
    render() {
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h4>To do tasks</h4>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Task Title</label>
                                <input name="title" value={this.state.title} className="form-control"
                                onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="details">Description</label>
                                <input name="details" value={this.state.details} className="form-control"
                                onChange={(event)=>{this.changeHandler(event.target.name,event.target.value)}}
                                />
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
                            <button className="btn btn-danger float-right"
                            onClick={this.addHandler}>Add Task</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewTask;