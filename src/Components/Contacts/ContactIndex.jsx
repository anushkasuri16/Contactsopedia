import React from "react";
import Header from "../Layout/Header";
import AddRandomContacts from "./AddRandomContact";
import RemoveContacts from "./RemoveContacts";
import FavouriteContact from "./FavouriteContact";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";
import AddContact from "./AddContact";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Anushka Suri",
          phone: 99999999999,
          email: "anushka.suri@gmail.com",
          isFav: false,
        },
        {
          id: 2,
          name: "Hardik Agarwal",
          phone: 77777777777,
          email: "hardik.agarwal@gmail.com",
          isFav: true,
        },
        {
          id: 3,
          name: "Geetika Suri",
          phone: 666666666666,
          email: "Geetika.suri@gmail.com",
          isFav: true,
        },
      ],
      isUpdated:undefined,
      selectedContact:undefined,
    };
  }
  handleToggleContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFav: !obj.isFav };
          }
          return obj;
        }),
      };
    });
  };
  handleDeleteAllContact = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
  };

  handleAddContact = (newContact) => {
    if (newContact.name == "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please enter a valid phone" };
    }
    const duplicateRecord = this.state.contactList.filter((v) => {
      if (
        v.name == newContact.name && v.phone == newContact.phone
      ) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Contact" };
    } else {
      const newFinalContact = {
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        ...newContact,
        isFav: true,
      };
      console.log({ newFinalContact });

      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Record added successfully" };
    }
  };
  handleRandomContact = (newContact) => {
   const newFinalContact = {
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        ...newContact,
        isFav: true,
      };
     this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
     
    }
  
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
        }),
      };
    });
  };
  handleEditContact = (contact) => {
    this.setState((prevState) => {
      return {
        isUpdated:true,
        selectedContact:contact,
        
      };
    });
  };
  handleCancelContact = () => {
    this.setState((prevState) => {
      return {
        isUpdated:false,
        selectedContact:undefined,
        
      };
    });
  };
  handleUpdateContact = (updatedContact) => {
    if (updatedContact.name == "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (updatedContact.phone == "") {
      return { status: "failure", msg: "Please enter a valid phone" };
    }
    
     else{
     
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.map((obj) =>{
            if(obj.id== updatedContact.id){
            return{
              ...obj,
              name:updatedContact.name,
              email: updatedContact.email,
              phone: updatedContact.phone
            }
          }
        return obj
      }),
      isUpdated:false,
selectedContact:undefined
        };
      });
      return { status: "success", msg: "Record Updated successfully" };
    }
      
    
  };


  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContacts handleRandomContact={this.handleRandomContact} />
            </div>
            <div className="col-4 row">
              <RemoveContacts
                handleDeleteAllContact={this.handleDeleteAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} handleUpdateContact={this.handleUpdateContact} isUpdated={this.state.isUpdated} selectedContact={this.state.selectedContact} handleCancelContact={this.handleCancelContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFav == true
                  )}
                  handleToggleContact={this.handleToggleContact}
                  handleDeleteContact={this.handleDeleteContact}
                  handleEditContact={this.handleEditContact}
                 
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFav == false
                  )}
                  handleToggleContact={this.handleToggleContact}
                  handleDeleteContact={this.handleDeleteContact}
                  handleEditContact={this.handleEditContact}
                 
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
