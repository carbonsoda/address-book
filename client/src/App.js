import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList';
import AddContact from './components/AddContact';
import SearchContacts from './components/SearchContacts';

export default function App() {
  const [allContacts, setContacts] = React.useState([]);

  const urlBase = 'http://localhost:5000';

  const addContact = async (body) => {
    fetch(`${urlBase}/contacts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(contact => getContacts(allContacts, contact))
      .catch(e => console.error(e.stack));
  }

  const getContacts = async () => {
    fetch(`${urlBase}/contacts`)
      .then(res => res.json())
      .then(contacts => setContacts(contacts))
      .catch(e => console.error(e.stack));
  }

  const deleteContact = async (id) => {
    console.log(id);
    setContacts(allContacts.filter(contact => contact.id !== id));
  }

  React.useEffect(() => {
    getContacts();
  }, []);


  return (
    <div className="App">
      <div className="container">
        <AddContact addContact={ addContact } />
      </div>
      <div className="container main-list">
        <ContactsList
          allContacts={ allContacts } deleteContact={ deleteContact } deleteEnabled={ true }
        />
      </div>
      <div className="container search-list">
        <SearchContacts allContacts={ allContacts } />
      </div>
    </div>
  );
}

