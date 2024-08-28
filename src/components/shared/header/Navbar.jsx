import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../authentication/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user)
    const navlist = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/art-and-crafts'>Paintings</NavLink></li>
        <li> <NavLink to='/add-anc'>Add painting</NavLink></li>
        <li><NavLink to='/my-art-and-crafts'>My Paintings</NavLink></li>
    </>
    const handleLogOut = () => [
        logout()
            .then()
            .then()
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlist}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Paintify</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlist}

                </ul>
            </div>
            {user ?
                <div className="navbar-end">
                    <p>{user.displayName}</p>
                    <button className='btn btn-warning' onClick={handleLogOut}>logout</button>
                </div> :
                <div className="navbar-end">
                    <Link to='/signup' className="btn">Sign Up</Link>
                    <Link to='/login' className="btn">Log In</Link>
                </div>
            }


        </div>
    );
};

export default Navbar;