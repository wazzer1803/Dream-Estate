import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Header()  {

  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <header className='bg-slate-300 shadow-xl'>
   <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
   <Link to='/'>
   <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
        <span   className='text-blue-400'>Dream</span>
        <span className='text-slate-700'>Estate</span>
    </h1>
   </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex text-sm md:text-md'>
      <input type="text" placeholder='Search.....' className="bg-transparent focus:outline-none w-24 sm:w-64"/>
      <FaSearch className='bg-slate-500 bg-transparent mt-1'/>
    </form>
    <ul className='flex gap-3'>
      <Link to='/'>
      <li className='hidden sm:inline text-slate-800 hover:underline'>Home</li>
      </Link>
<Link to='/about'>
      <li className='hidden sm:inline text-slate-800 hover:underline'>About</li>
</Link>
<Link to ='/profile'>
  {
  currentUser? (<img
    className='rounded-full h-7 w-7 object-cover'
    src={currentUser.avatar}
    alt='profile'
    />) : 
      (<li className='hidden sm:inline text-slate-800 hover:underline'>Sign In</li>)
}
</Link>
    </ul>
    {/* <div>
      asdad
    </div> */}
    
    </div>   

    </header>
  )
}


