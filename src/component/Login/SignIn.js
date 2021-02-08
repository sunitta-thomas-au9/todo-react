import React from 'react';
// const url ="http://localhost:5000/api/auth/register";
class SignIn extends React.Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
        }
    }
    changeHandler=(key,value)=>{
        this.setState({
            ...this.state,
            [key]:value
        })
    }
    registerHandler=()=>{
        fetch('http://localhost:8900/users',
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }
    render(){
        return(
            <div>
                <input name="name" value={this.state.name}
                onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}/>
                <input name="email" value={this.state.email}
                onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}/>
                <input name="password" value={this.state.password}
                onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}/>
                <button onClick={this.registerHandler}>Register</button>

            </div>
            
        );
    }
}
export default SignIn;