import React from "react";
//library for making HTTP requests
import axios from "axios";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        // Create refs for each input field
        //this is the modern way to create refs
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
    }

    submitPlayer = (event) => {
        //Prevent the default action of the form, which is to reload the page
        event.preventDefault();

        axios.post('http://localhost:4000/players', {
            //Use the refs to get the value of each input field
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value
            //This is the old way to get the value of an input field
/*
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
*/
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() { 
        return (
            <div>
                <h1 className="center-align">Add new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref={this.firstNameRef} type="text" className="validate"/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref={this.lastNameRef} type="text" className="validate"/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone" ref={this.phoneRef} type="text" className="validate"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref={this.emailRef} type="text" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Player</button>
                </form>
            </div>
        );
    }
}
 
export default PlayerForm;