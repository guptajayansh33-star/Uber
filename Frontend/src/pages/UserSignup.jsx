import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()
        setUserData({
            email: email,
            password: password,
            fullName: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }),

        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
       <div>
         <img className='w-18 mb-4 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>

        <h3 className='text-lg font-medium mb-2'>what's your name?</h3>
        <div className='flex gap-4 mb-6'>
        <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
        value={firstname}
        onChange={(e)=>{
          setFirstname(e.target.value)
        }}
        required 
        type="text" 
        placeholder='First name'/>
        <input className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base' 
        value={lastname}
        onChange={(e)=>{
          setLastname(e.target.value)
        }}
        required 
        type="text" 
        placeholder='Last name'/>
        </div>

        <h3 className='text-lg font-medium mb-2'>what's your email?</h3>
        <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        required 
        type="email" 
        placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        required 
        type="password" 
        placeholder='password'/>

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
      </form>

        <p className='text-center'>Already have an account?<Link to='/login' className='text-blue-600'> Login here</Link></p>

       </div>
       <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
       </div>
    </div>
  )
}

export default UserSignup
