import React from 'react';

export default function AddContact({ addContact, errors }) {
    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [phone_number, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        
        if (first_name && last_name && phone_number && email) {
            const body = { first_name, last_name, phone_number, email };
            
            addContact(body);
        }
    }

  return (
      <>
          <h2>Add Contact </h2>
          <form
              onSubmit={ submitForm }
              className="add-form"
          >
              <label>First Name</label>
              <input type="text"
                  placeholder="John"
                  value={ first_name }
                  onChange={ e => setFirstName(e.target.value) }
              />

              <label>Last Name</label>
              <input type="text"
                  placeholder="Smith"
                  value={ last_name }
                  onChange={ e => setLastName(e.target.value) }
              />

              <label>Phone Name</label>
              <input type="text"
                  placeholder="123-456-7890"
                  value={ phone_number }
                  onChange={ e => setPhone(e.target.value) }
              />

              <label>Email Address</label>
              <input type="text"
                  placeholder="joe@email.com"
                  value={ email }
                  onChange={ e => setEmail(e.target.value) }
              />
              
              <button type="submit">Submit</button>
              {errors}
          </form>
    
    </>
  );
}
