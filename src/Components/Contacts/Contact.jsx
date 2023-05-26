const Contact = (props) => {
    return(
        <div className="row p-md-2 mb-2" style={{borderRadius:"20px", border:"1px solid #555"}} >
            <div className="col-2 col-md-1 pt-2 pt-md-1">
                <img src={`https://ui-avatars.com/api/?name=${props.contact.name}`} style={{width:"80%"}} alt=""></img>

            </div>
         <div className="col-6 col-md-5 text-warning pt-0">
            <span className="h4">{props.contact.name}</span>
            <br></br>
            <div className="text-white" style={{fontSize:"15px"}}>
            <span >{props.contact.email}</span>
            <br />
            <span >{props.contact.phone}</span>
         </div>
         
         </div>
         <div className="col-2 col-md-2 pt-md-3">
            <button onClick={()=>props.handleToggleContact(props.contact)} className= {`btn btn-sm m-1" ${props.contact.isFav ? "btn-warning" : "btn-outline-warning"}`}> <i className="bi bi-star" style={{fontSize:"1rem"}}></i> </button>
         </div>

         <div className="col-2 col-md-2 pt-md-3">
         <button onClick={()=>props.handleEditContact(props.contact)} className="btn btn-primary btn-sm m-1" > <i className="bi bi-pencil-square" style={{fontSize:"1rem"}}></i> </button>
         <button onClick={()=>props.handleDeleteContact(props.contact.id)} className="btn btn-danger btn-sm m-1" > <i className="bi bi-trash-fill" style={{fontSize:"1rem"}}></i> </button>
         </div>

        </div>
    )
}
export default Contact; 