import React from 'react';
import Contact from './Contact';

export default function ContactsList({ allContacts, deleteContact, deleteEnabled }) {

    const deleteBtn = (id) => {
        deleteContact(id);
    }

    return (
        <>
            <ul>
                {
                    allContacts.map((contact) => (
                        <li key={ contact.id }>
                            <Contact contact={ contact } />
                            { !deleteEnabled ? ''
                                : <button
                                    onClick={ () => deleteBtn(contact.id) }>
                                    Delete
                            </button>
                            }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
