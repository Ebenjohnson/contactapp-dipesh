

import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"


function App() {
 //const [contacts, setContacts] = useState([])

 const contacts = [{
   id: 1, 
   name : "Ebenezer",
   email : "ebenjohnson@yahoo.com"
 },
 {
   id: 2, 
   name : "Eben",
   email : "ebene2@gmail.com"
 }
]

  return (
    <div className = "ui container">
      <Header/>
      {/* <AddContact/> */}
  
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
