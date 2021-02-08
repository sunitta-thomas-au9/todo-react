import {withRouter} from 'react-router-dom';
const DisplayPending = (props) => {
    const renderList=({pendingList}) =>{
        // console.log(completedList)
        if(pendingList){
            return pendingList.map((item) => {
                return (
                    <div className="taskBox" key={item._id}>
                        <div className="taskDetails">
                            <h3>{item.title}</h3>
                            <p>{item.details}</p>
                            <p>Status: {item.status}</p>
                            <p>Start Date: {item.start}</p>
                            <p>End Date: {item.end}</p> 
                            <button className="btn btn-danger"
                                onClick={()=>editHandler(item._id)}>
                                <i className="fa fa-edit"> &nbsp;</i>Edit
                            </button>                          
                        </div>
                    </div>
                )
            })
        }
        else {
            <h3>No data found</h3>
        }

    }
    const editHandler=(id)=>{
        // console.log(id)
        props.history.push(`/edit/${id}`)
    }
    return(
        <div className="container">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3>Pending Tasks</h3>
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

export default withRouter(DisplayPending);