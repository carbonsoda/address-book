import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList';
import AddContact from './components/AddContact';

export default function App() {
  const [allContacts, setContacts] = React.useState([]);

  const addContact = async (body) => {
    // fetch stuff here
  }

  const getContacts = async () => {
    // fetch stuff here
  }

  const deleteContact = async (id) => {
    // fetch stuff here
  }


  return (
    <div className="App">
      <AddContact addContact={ addContact } />
      <ContactsList contacts={ allContacts } deleteContact={ deleteContact } />
    </div>
  );
}

