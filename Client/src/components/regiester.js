import React, { useEffect, useState } from 'react';


function Regiester() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');


    async function createUser(event) {
        event.preventDefault()
        console.log(firstName, lastName, birthday, username, email, password, confirmPassword)
        if(password !== confirmPassword) {
          alert('Passwords must match')

        } else {
    
        const res = await fetch('http://localhost:3001/user/signup',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            birthday,
            username, 
            email, 
            password
          })
        })
        const data = await res.json();
        console.log(data)
    
        // if(data.status === 200) {
        //   localStorage.setItem('token', data.token)
        //   alert('User signed up successfully')
        //   window.location.assign('/')
        // } else {
        //   alert('User not signed up successfully, please try again')
        // }
      }
      };

    return (
    <div>
       <form onSubmit={createUser} className='signup-form'>
       <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            placeholder="First Name " 
        />

       <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
            placeholder="Last Name" 
        />

        <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e)=> setBirthday(e.target.value)}
            placeholder="birth date" 
        />

       <input
            type="text"
            id="userName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" 
        />

        <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="email" 
        />

        <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password" 
        />

        <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
        />        

        <button type="submit"> 
            Register
        </button>

       </form>
    </div>
  )  
};

export default Regiester