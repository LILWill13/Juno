import {useState} from 'react';

export default function Login() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault()


        const res = await fetch('http://localhost:3001/user/login',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email, 
            password
          })
        })
    
        const data = await res.json();
        console.log(data)
        
        if(data.user){
            localStorage.setItem('token', data.token)
            alert('login successful')
        } else {
            alert('please check username and password')
        }
      };

    return (
    <div className='Login'>
        <form onSubmit={loginUser} className='login-form'>
    
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
               
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
   
            <button type='submit'>
                Login
            </button>
        </form>
     </div>
    );
}