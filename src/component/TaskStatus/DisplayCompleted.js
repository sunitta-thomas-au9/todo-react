import {withRouter} from 'react-router-dom';
const DisplayCompleted = (props) => {
    const renderList=({completedList}) =>{
        // console.log(completedList)
        if(completedList){
            return completedList.map((item) => {
                return (
                    <div className="taskBox" key={item._id}>
                        <div className="taskDetails">
                            <h3>{item.title}</h3>                            
                            <p>{item.details}</p>
                            <p>Status: {item.status}</p>
                            <p>Start Date: {item.start}</p>
                            <p>End Date: {item.end}</p> 
                            <button className="btn btn-danger"
                        onClick={()=>deleteHandler(item._id)}><i className="fa fa-remove"> &nbsp;</i>Delete</button>                           
                        </div>
                    </div>
                )
            })
        }
        else {
            <h3>No Data Found</h3>
        }

    }
    const deleteHandler=(id)=>{        
        // WE CAN DO THE BELOW ALSO
        // props.history.push(`/del/${id}`)
               
        const delUrl =`https://todo1-node-app.herokuapp.com/delete`
        fetch(`${delUrl}/${id}`,{method:'DELETE'})
        .then(window.location.reload())
    }
    return(
        <div className="container">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3>Completed Tasks</h3>
                </div>
                <dv className="panel-body">
                    <div className="task-main-container">
                        {renderList(props)}
                    </div>
                </dv>
            </div>
        </div>
    );
}

export default withRouter(DisplayCompleted);