import React from 'react';
import Contact from './Contact';

export default function ContactsList({ allContacts, deleteContact }) {

    const deleteBtn = (id) => {
        deleteContact(id);
    }

    return (
        <>
            <h2>Contacts List</h2>
            <ul>
                {
                    allContacts.map((contact) => (
                        <li key={contact.id}>
                            <Contact contact={ contact } />
                            <button
                                onClick={ () => deleteBtn(contact.id)}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
