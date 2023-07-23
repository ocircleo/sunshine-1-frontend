import React from 'react';

const TabsJob = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between px-2  border rounded items-center'>
            <div className='flex sm:flex-row w-full flex-col items-start sm:items-center  gap-4  capitalize text-gray-700 p-2'>
                <img src="" className='w-full sm:w-[8rem] sm:h-auto h-[10rem] sm:aspect-square bg-red-50' alt="" />
                <div>
                    <img src="" className='h-10 w-10 bg-gray-300' alt="" />
                    <p>position: webdevloper</p>
                    <p>company: upstream</p>
                    <p>location: dhaka bangladesh</p>

                </div>
            </div>
            <button className='btn btn-primary w-full sm:w-auto my-2'>apply</button>

        </div>
    );
};

export default TabsJob;