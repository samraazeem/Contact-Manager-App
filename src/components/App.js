import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contact = [
    {
      id: "1",
      name: "Thor",
      email: "thor.odinson@avengers.com"
    },
    {
      id: "2",
      name: "Captain America",
      email: "steve@avengers.com"
    },
    {
      id: "1",
      name: "Iron Man",
      email: "tony.stark@avengers.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />      
      <ContactList contacts= {contact}/>
    </div>
  );
}

export default App;
