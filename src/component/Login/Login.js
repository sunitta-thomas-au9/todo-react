
import React from 'react';

const firsturl = "http://localhost:5000/api/auth/login";
const secondurl ="http://localhost:5000/api/auth/userinfo"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'', 
            error:''           
        }
    }
    
   loginHandler= async() => {
       try{
        const settings= {
            method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body:JSON.stringify(this.state)
            };
       const response = await fetch(firsturl,settings);
       const data = await response.json();
    //    console.log(data)
       sessionStorage.setItem('_ltk',data.token);
        
       const second_settings = {method:'GET',
                   headers:{
                       'x-access-token':sessionStorage.getItem('_ltk')
                   }
               }
       const sResponse = await fetch(secondurl,second_settings);
       const sdata = await sResponse.json();
    //    console.log(sdata.name);
       sessionStorage.setItem("name",sdata.name);

       this.props.history.push('/');
       }
       catch (err) {
                this.setState({error:"Invalid User name or Password"})
       }
   }

    changeHandler = (key,value) => {
        this.setState({
            ...this.state,
            [key]:value
        })
    }
   
    render() {
        
        return(
            <div className="container">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3>Login Form</h3>
                    <h4>{this.state.error}</h4>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="email" 
                            value={this.state.email} 
                            className="form-control"
                            onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}>
                            </input>
                    </div>
                    <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="password" 
                            value={this.state.password} 
                            className="form-control"
                            onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}>
                            </input>
                    </div>
                    <button className="btn btn-danger"onClick={()=>this.loginHandler(this.props)}>Login</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;