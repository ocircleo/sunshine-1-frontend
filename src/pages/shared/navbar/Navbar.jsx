import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextProvier } from "../../../private/provider/Provider";


const Navbar = () => {
    const [login, setLogin] = useState(false)
    const { user, logOut } = useContext(contextProvier)
    let links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </>

    return (
        <div className="navbar bg-blue-200 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Salman</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <Link to={'/a/acount'}>
                            <img src={user?.photoURL} alt="" className="h-12 aspect-square rounded-full bg-gray-300" />
                        </Link>
                        <button onClick={logOut} className="btn btn-warning ms-2">Sign Out</button>
                    </> : <>

                        <button className="p-3 bg-blue-500 rounded me-4 active:scale-90 duration-200" onClick={() => setLogin(!login)}>Acount</button>
                        <div className={`absolute flex justify-stretch items-center gap-2  ${!login ? 'top-[3.5rem] invisible pointer-events-auto' : 'top-[4.5rem] visible pointer-events-auto'} w-[10rem] rounded right-4 absolute bg-white border flex-col capitalize duration-100 ease-in`}>
                            <Link to={'/login'} className="py-2 text-center hover:bg-gray-200  rounded w-full">login</Link>
                            <Link to={'/register'} className="py-2 hover:bg-gray-200 text-center w-full rounded">signup</Link>
                        </div>
                    </>

                }

            </div>
        </div>
    );
};

export default Navbar;