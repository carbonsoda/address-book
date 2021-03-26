import React from 'react';

export default function Contact({ contact }) {
  const {first_name, last_name, phone_number, email} = contact;
  return (
    <>
      {first_name} {last_name} - {phone_number} + {email}
    </>
  );
}
