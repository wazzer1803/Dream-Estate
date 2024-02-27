import React from 'react'
import { Link } from 'react-router-dom' 
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>
        Sign Up
        </h1>
        <form className='flex flex-col gap-4 '>
          <input type="text" placeholder="username "className="border p-3 rounded-lg" />
          <input type="email" placeholder="email" className="border p-3 rounded-lg "/>
          <input type="password" placeholder="password" className="border p-3 rounded-lg" />
        <button className ="bg-slate-900 text-white p-3 rounded-lg hover:opacity-95 disabled opacity:80"> SIGN UP</button>
        </form>
      <div className='flex gap-2 mt-4 text-md text-bold'>
        <p> Have an Account ?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-800 text-bold '>Sign in</span>
        </Link>
      </div>
    </div>
  )
}


