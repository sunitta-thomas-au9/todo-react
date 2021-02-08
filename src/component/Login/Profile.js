import React from 'react';
const url='http://localhost:5000/api/auth/userinfo';
class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            user:''
        }
    }
    componentDidMount() {
        fetch(url,{method:'GET',
        headers:{
            'x-access-token':sessionStorage.getItem('_ltk')
        }
     })
     .then(resp=>resp.json())
     .then(data=>this.setState({
        user:data
     })
     ,data=>sessionStorage.setItem('name',data.name)
     )    
    
    }
    logoutHandler =() => {
        sessionStorage.removeItem('_ltk');
        sessionStorage.removeItem('name');
        this.props.history.push('/login')
    }
    render() {
        return(
           <div className="container">
               <div className="panel panel-danger">
                   <div className="panel-heading">
                       <h3>Welcome</h3>
                   </div>
                   <div className="panel-body">
                       <h4>Customer Detail</h4>
                       <h5>Name:{this.state.user.name}</h5>
                       <h5>Email:{this.state.user.email}</h5>
                   </div>                  
               </div>
               <button className="btn btn-danger" onClick={this.logoutHandler}>Logout</button>

           </div>
        );
    }
}
export default Profile;