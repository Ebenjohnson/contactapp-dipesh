
import React from "react"




class AddContact extends React.Component {

    // state = {
    //     name : " ",
    //     email : " "
    // }
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
         
        }
      }
        add = (e) =>{
            e.preventDefault();
            // if (this.state.name ===""&& this.state.email ===""){
            //     alert("All the fields are mandatory!");

            //     return  
            // }
            console.log(this.state)
        }

    render() {
        return(
            <div className = "ui main">
            <h2>Add Contact</h2>
            <form className = "ui form" >
                <div className = "field">
                    <label>Name</label>
                    <input type = "text" name="name" placeholder="name" 
                     //value={this.state.name}
                     //onChange={(e)=> this.setState({name : e.target.value})}
                    > </input>
                </div>
                <div className = "field">
                    <label>Email</label>
                    <input type = "text" name="email" placeholder="email"
                    //value={this.state.email}
                   // onChange={(e)=> this.setState({email : e.target.value})}
                    > </input>
                </div>
                    <button className = "ui button blue">Add</button>
                
             </form>
                
            </div>
        );
    }

}

export default AddContact
