import React from 'react';

export default function AddContact({ addContact }) {

    const submitForm = async (e) => {
        e.preventDefault();

        // addContact(body);
    }

  return (
      <>
          <form onSubmit={ submitForm }>
              
              <button type="submit">Submit</button>

          </form>
    
    </>
  );
}
