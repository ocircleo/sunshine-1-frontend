import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Acount = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className='h-14 w-full bg-gray-300  flex items-center lg:hidden'>

                <label htmlFor="my-drawer-2" className="btn bg-white drawer-button lg:hidden ">menu</label>
                </div>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content gap-2 capitalize">
                    {/* Sidebar content here */}
                    <Link to={'/a/acount'} className='bg-gray-300 p-2 text-center rounded-md hover:bg-gray-400'>Profile</Link>
                    <Link to={'/a/application'} className='bg-gray-300 p-2 text-center rounded-md  hover:bg-gray-400'>Applications</Link>
                  
                    <hr className='bg-gray-300 h-[3px]' />
                    <Link to={'/'} className='bg-gray-300 p-2 text-center rounded-md hover:bg-gray-400'>Home</Link>
                </ul>

            </div>
        </div>
    );
};

export default Acount;