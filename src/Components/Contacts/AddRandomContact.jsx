import { getRandomUser } from "../../Utilities/api";

const getRandomContact = async (props) =>{
    const responseFromAPI =  await getRandomUser();
return props.handleRandomContact({
    name: responseFromAPI.data.first_name + " "+ responseFromAPI.data.last_name,
    email: responseFromAPI.data.email,
    phone: responseFromAPI.data.phone_number
})
}



const AddRandomContacts = (props) => {
    return (
        <div>

        <button className="btn btn-primary form-control" onClick={()=> getRandomContact(props)}>Add Random Contact</button>
        </div>
    )
}

export default AddRandomContacts;