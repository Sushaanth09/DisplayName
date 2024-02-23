import React, { useState } from 'react'
import './fullname.css'

function FullName() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please fill out both first name and last name.");
        return;
    }


    const fullNameValue = `${firstName} ${lastName}`;
    setFullName(fullNameValue)
}

  return (
   <div>
     <h1>Full Name Display</h1>
     <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">First Name :</label>
        <input type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
        />
        </div>
        <div>
        <label htmlFor="lastName">Last Name :</label>
        <input type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
        />
        </div>
        <button type='submit'>Submit</button>
    </form>
    {fullName && <p>Full Name: {fullName}</p>}
   </div>
  )
}

export default FullName;