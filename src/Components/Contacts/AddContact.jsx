import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: undefined,
      failedMessage: undefined,
    };
  }
  handleAddContactSubmit = (e) => {
   e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const id = e.target.elements.contactId.value.trim();
    let response = undefined;
    if(this.props.isUpdated){
        response = this.props.handleUpdateContact({ name: name, email: email, phone: phone,id:id });
    
    }
    else{  response = this.props.handleAddContact({ name: name, email: email, phone: phone });}
    
    
    
    
    
    if(response.status=="success"){
        this.setState({ successMessage: response.msg, failedMessage:undefined})
        document.querySelector(".contact-form").reset();

    }
    else{
        this.setState({ successMessage:undefined, failedMessage:response.msg})
    }
  };
  
  
  render() {
    return (
      <div className="border text-gray p-2">
        <div className="col-12 text-gray-50">{this.props.isUpdated==true ? "Edit a Contact" : "Add a new Contact" } </div>
        
        <form onSubmit={this.handleAddContactSubmit} className="contact-form">
            
          <div className="row p-2">
        
              <input
                hidden
                name="contactId"
                defaultValue={this.props.isUpdated ? this.props.selectedContact.id : "" }
              ></input>
           
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name"
                name="contactName"
                defaultValue={this.props.isUpdated ? this.props.selectedContact.name : "" }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email"
                name="contactEmail"
                defaultValue={this.props.isUpdated ? this.props.selectedContact.email : "" }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone Number"
                name="contactPhone"
                defaultValue={this.props.isUpdated ? this.props.selectedContact.phone : "" }
              ></input>
            </div>
            {this.state.failedMessage==undefined ? (<div></div>): (<div className="col-12 text-center text-danger">{this.state.failedMessage}</div>) }
{this.state.successMessage==undefined ? (<div></div>): 
(<div className="col-12 text-center text-primary">{this.state.successMessage}</div>) }
              
            <div className={`col-12 p-1 ${this.props.isUpdated ? "col-md-4 offset-md-2": "col-md-6 offset-md-3"}`}>
              <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdated? "Update":"Create"}
              </button>
              </div>
              <div className="col-12 col-md-4 p-1">
             {this.props.isUpdated && (<button onClick={()=>this.props.handleCancelContact()} className="btn btn-primary btn-sm form-control">
                Cancel
              </button>)}
            </div>
          </div>
          
        </form>
      </div>
      
    );
  }
}
export default AddContact;
