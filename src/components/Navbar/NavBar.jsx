import React, { useState } from 'react';
import Link from './Link';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const naviGation = [
    {
      "id": 1,
      "name": "Home",
      "path": "/home"
    },
    {
      "id": 2,
      "name": "About Us",
      "path": "/about"
    },
    {
      "id": 3,
      "name": "Services",
      "path": "/services"
    },
    {
      "id": 4,
      "name": "Contact",
      "path": "/contact"
    },
    {
      "id": 5,
      "name": "FAQ",
      "path": "/faq"
    }
  ];
const NavBar = () => {
 const [oppen, setOppen] = useState(false)

 const links = naviGation.map(route =>  <Link key={route.id} route={route}></Link>)



    return (
        <nav className='flex gap-5 justify-between mt-4 px-5 text-white'>
            <span className='flex gap-5 cursor-pointer' onClick={()=> setOppen(!oppen)}>
              {oppen ? <RxCross2 className='md:hidden'/> : <IoMdMenu className='md:hidden'/>}
             
              <ul className={`md:hidden absolute duration-1000 px-3 py-2 rounded-md
                ${oppen ? 'top-10' : '-top-40'}
                bg-amber-300`}>
                {links}
              </ul>
           
            <h1>My Navbar</h1>
            </span>
         <ul className='md:flex gap-10 justify-around hidden'>
         {
            links
          }

         </ul>
            {/* <ul className='flex'>
                <li className='mr-10 '><a href="">Home</a></li>
                <li className='mr-10 '><a href="">Home</a></li>
                <li className='mr-10 '><a href="">Home</a></li>
                <li className='mr-10 '><a href="">Home</a></li>
                <li className='mr-10 '><a href="">Home</a></li>
            </ul> */}
            <button>sign in</button>
        </nav>
    );
};

export default NavBar;