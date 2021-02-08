import React from 'react';

// const delUrl =`http://localhost:9700/todo/delete`
const delUrl =`https://todo1-node-app.herokuapp.com/todo/delete`

class DeleteTask extends React.Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }

    componentDidMount=async()=>{
        const deleteOptions = {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        };
        fetch(`${delUrl}/${this.props.match.params.id}`,deleteOptions)
        .then(response => response.json())
        .then(data => this.setState({ id: data.id }))
        .then(this.props.history.push('/'))
              
    }

    render(){
        console.log("test")
        // console.log("from delte",this.props.match.params)
        return(
            <div>Deleted</div>
        );
    }
}

export default DeleteTask;