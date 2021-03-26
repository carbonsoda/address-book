import React from 'react';
import Contact from './Contact';
import { DataGrid } from '@material-ui/data-grid';

export default function ContactsList({ allContacts, deleteContact, deleteEnabled }) {

    const deleteBtn = (id) => {
        deleteContact(id);
    }

    const columns = [
        { field: 'first_name', headerName: 'First Name', flex: .5 },
        { field: 'last_name', headerName: 'Last Name', flex: .5 },
        { field: 'phone_number', headerName: 'Phone', flex: .5 },
        { field: 'email', headerName: 'Email', flex: .5 },
        // { field: 'deleteBtn', headerName: 'D', flex: .5 }
    ]

    const rows = allContacts.map(contact => ({
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email
    }))

    return (
        <>
            <DataGrid
                rows={ rows } columns={ columns }
                pageSize={ 10 } autoHeight
            />
        </>
    )
}


// {
//     allContacts.map((contact) => (
//         <li key={ contact.id }>
//             <Contact contact={ contact } />
//             { !deleteEnabled ? ''
//                 : <button
//                     onClick={ () => deleteBtn(contact.id) }>
//                     Delete
//                             </button>
//             }
//         </li>
//     ))
// }