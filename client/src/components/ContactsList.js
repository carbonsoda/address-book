import React from 'react';
import Contact from './Contact';

export default function ContactsList({ allContacts, deleteContact }) {

    return (
        <>
            <h2>Contacts List</h2>
            <ul>
                {
                    allContacts.map((contact) => (
                        
                    ))
                }
            </ul>
        </>
    )
}
