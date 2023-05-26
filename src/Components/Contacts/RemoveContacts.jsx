const RemoveContacts = (props) => {
    return (
        <div>

        <button onClick={()=>props.handleDeleteAllContact(props.contact)} className="btn btn-danger form-control">Remove All</button>
        </div>
    )
}

export default RemoveContacts;