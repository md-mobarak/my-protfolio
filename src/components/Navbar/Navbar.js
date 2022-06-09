import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' sticky top-0 bg-primary'>
            <div class="navbar bg-primary">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/aboutMe' className={({ isActive }) =>
                                isActive ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : ' text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500 '
                            }>About Me</NavLink></li>

                            <li><NavLink to='/contactMe' className={({ isActive }) =>
                                isActive ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : ' text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500'
                            }>Contact Me</NavLink></li>
                            <li><NavLink to='/myProject' className={({ isActive }) =>
                                isActive ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : ' text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500'
                            }>My Project</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'ml-6 bg-gradient-to-r from-green-400 to-blue-500 btn btn-ghost normal-case text-2xl text-white ' : 'btn btn-ghost normal-case text-2xl text-white hover:bg-gradient-to-r from-pink-500 to-yellow-500 ml-6'}>MOBARAK</NavLink>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink to='/aboutMe' className={({ isActive }) =>
                            isActive ? 'mr-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : 'text-white text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500 mr-4'
                        }>About Me</NavLink></li>

                        <li><NavLink to='/contactMe' className={({ isActive }) =>
                            isActive ? 'mr-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : 'text-white text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500 mr-4'
                        }>Contact Me</NavLink></li>
                        <li><NavLink to='/myProject' className={({ isActive }) =>
                            isActive ? 'mr-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl' : 'text-white text-xl hover:bg-gradient-to-r from-pink-500 to-yellow-500 mr-4'
                        }>My Project</NavLink></li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;