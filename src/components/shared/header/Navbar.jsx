import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../authentication/AuthProvider';
import { GiPencilBrush } from "react-icons/gi";
import { motion } from "framer-motion"

const Navbar = () => {
    const { user, logout, loader } = useContext(AuthContext)
    console.log(user)

    const navlist = <>
        <li><NavLink to='/' className='lg:text-white text-black navlist'>Home</NavLink></li>
        <li> <NavLink to='/art-and-crafts' className='lg:text-white text-black navlist'>Paintings</NavLink></li>
        <li> <NavLink to='/add-anc' className='lg:text-white text-black navlist'>Add painting</NavLink></li>
        <li><NavLink to={`/myAnC/${user?.uid}`} className='lg:text-white text-black navlist'>My Paintings</NavLink></li>
    </>
    const handleLogOut = () => [
        logout()
            .then()
            .then()
    ]
    return (
        <div

            className='bg-black'>
            <motion.div
                initial={{ y: -250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                className="navbar bg-transparent container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
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
                    <Link

                        to='/'
                        className="btn btn-ghost text-xl text-white"><GiPencilBrush />Paintify</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlist}

                    </ul>
                </div>
                {user ? loader ?
                    <span className="loading loading-spinner loading-sm"></span> :
                    <div className="navbar-end gap-2">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <p className='text-white lg:block hidden font-medium text-lg'>{user.displayName}</p>
                        <button className='btn bg-white ' onClick={handleLogOut}>logout</button>
                    </div> :
                    <div className="navbar-end gap-1">
                        <Link to='/signup' className="btn">Sign Up</Link>
                        <Link to='/login' className="btn">Log In</Link>
                    </div>
                }


            </motion.div>
        </div>
    );
};

export default Navbar;