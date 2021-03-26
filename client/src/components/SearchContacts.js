import React from 'react';
import ContactsList from './ContactsList';


export default function SearchContacts({ allContacts }) {
    const [searchLast, setSearchLast] = React.useState('');
    const [foundContacts, setFoundContacts] = React.useState([]);

    const searchContacts = (e) => {
        e.preventDefault();
        console.log(allContacts.filter(contact => contact.last_name === searchLast));
    }

    const clearBtn = (e) => {
        e.preventDefault();
        setFoundContacts([]);
        setSearchLast('');
    }

    return (
        <>
            <form onSubmit={ searchContacts }>
                <label>Last Name:</label>
                <input
                    type="text"
                    value={ searchLast }
                    placeholder="Smith"
                    onChange={ e => setSearchLast(e.target.value) }
                />
                <button type="submit">Search</button>
                <button onClick={ clearBtn }>Clear</button>
            </form>
            <div>
                { foundContacts ?
                    <ContactsList
                        allContacts={ foundContacts }
                        deleteContact={ () => '' }
                        deleteEnabled={ false }
                    />
                    : '' }
            </div>
        </>
    );
}
