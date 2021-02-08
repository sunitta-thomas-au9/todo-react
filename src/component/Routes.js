import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AddNewTask from './Tasks/AddNewTask';
import DeleteTask from './Tasks/DeleteTask';
import EditTask from './Tasks/EditTask';
// import DeleteTask from './DeleteWithoutDelete';
// import SignIn from './Login/SignIn';
// import Login from './Login/Login';
// import Profile from './Login/Profile';
import Completed from './TaskStatus/Completed';
import Pending from './TaskStatus/Pending';

const Routes = ()=> {
    return(
        <BrowserRouter>
            <Header/>            
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/edit/:id" component={EditTask}/>
                <Route path="/home" component={Home}/>
                <Route path="/add" component={AddNewTask}/>
                <Route path="/del/:id" exact component={DeleteTask}/>
                {/* <Route path="/signIn" component={SignIn}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/> */}
                <Route path="/completed" component={Completed}/>
                <Route path="/pending" component={Pending}/>
                
            </Switch>
            <Footer/>
        </BrowserRouter>
    );

}

export default Routes