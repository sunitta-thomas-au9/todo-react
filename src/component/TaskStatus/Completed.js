import React from 'react';
import DisplayCompleted from './DisplayCompleted';
// const url = 'http://localhost:9700/todo/'
const url = 'https://todo1-node-app.herokuapp.com/todo/'
class Completed extends React.Component {
    constructor(){
        super();
        this.state={
            details:''
        }
    }
    componentDidMount(){
        fetch(`${url}?status=completed`)
        .then(resp=>resp.json())
        .then(data=>this.setState({details:data}))
    }
    
    render(){
        return(
            <DisplayCompleted completedList = {this.state.details} />          
        )
    }
    
}

export default Completed;