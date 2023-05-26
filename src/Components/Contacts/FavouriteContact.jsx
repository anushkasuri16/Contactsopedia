import Contact from "./Contact"

const FavouriteContact = (props) => {
    return (
        <div className="col-12 py-2" style={{borderRadius:"10px", backgroundColor:"#323637"}}>

        <div className="text-center text-white-50" >Favourite Contact</div>
        <div className="p-2">
        {props.contacts.map((contact,index) => (
        <Contact contact={contact} key={index} handleToggleContact={props.handleToggleContact} handleEditContact={props.handleEditContact} handleDeleteContact={props.handleDeleteContact}></Contact>
        )
        
        )}
        </div>
        </div>
    )
}

export default FavouriteContact;