import React from 'react';
import logo from './../assets/logo1.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoLogInOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TiHeartFullOutline } from 'react-icons/ti';
import Navitems from './Navitems';

function Navbar() {
  return (
    <nav className="p-4 border-b border-black">
      <div>
        {/* firstrow */}
        <section className='flex items-center justify-between p-2'>
          <div className="flex space-x-2 items-center">
            <img className="h-8" src={logo}></img>
            <h1 className="text-xl tracking-wide font-semibold">Shopping</h1>
          </div>
          <div className="w-96">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 font-normal bg-white border border-black rounded-full"
            />
          </div>
          <div className='flex items-center gap-3'>
            <Link to="">
              <IoLogInOutline className="text-2xl" />
              <span className="text-xs font-normal hover:underline">
                Sign In
              </span>
            </Link>

            <Link to="saved">
            <TiHeartFullOutline/>
            <span className='text-xs font-normal hover:underline'>saved</span>
            </Link>

            <Link to="">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Cart</span>
            </Link>
          </div>
        </section>

        {/* second row */}
        <section>
          <div className='flex justify-center items-center'>
            <ul className='flex space-x-4'>
             <Navitems to="/" text="Home"/>
             <Navitems to="/" text="Men"/>
             <Navitems to="/" text="Women"/>
             <Navitems to="/" text="Kids"/>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;