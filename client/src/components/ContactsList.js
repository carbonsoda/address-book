import React from 'react';
import Contact from './Contact';
import MaterialTable from 'material-table';

export default function ContactsList({ allContacts, deleteContact, deleteEnabled }) {

    const columns = [
        { field: 'first_name', title: 'First Name' },
        { field: 'last_name', title: 'Last Name' },
        { field: 'phone_number', title: 'Phone' },
        { field: 'email', title: 'Email' },
        { field: 'deleteBtn', title: '' }
    ]

    const rows = allContacts.map(contact => ({
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email,
        deleteBtn:
            <button
                onClick={ () => deleteContact(contact.id) }
            >
                Delete
            </button>
    }))

    return (
        <>
            <MaterialTable
                title="Address Book"
                columns={ columns }
                data={ rows }
                autoHeight
                options={ {
                    pageSize: 10,
                    headerStyle: {
                        backgroundColor: 'hsla(175, 37%, 35%, 1)',
                        color: '#FFF'
                    },
                    titleStyle: {
                        color: '#FFF'
                    }
                } }
            />
        </>
    )
}
