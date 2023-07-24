import React from 'react';

const TabsJob = ({ data }) => {
    console.log(data);
    const { company, job_title, location } = data
    return (
        <div className='flex flex-col sm:flex-row justify-between px-2  border rounded items-center'>
            <div className='flex sm:flex-row w-full flex-col items-start sm:items-center  gap-4  capitalize text-gray-700 p-2'>
                <img src="" className='w-full sm:w-[8rem] sm:h-auto h-[10rem] sm:aspect-square bg-red-50' alt="" />
                <div>
                    <img src="" className='h-10 w-10 bg-gray-300' alt="" />
                    <p>position: {job_title}</p>
                    <p>company: {company}</p>
                    <p>location: {location}</p>

                </div>
            </div>
            <button className='btn btn-primary w-full sm:w-auto my-2'>apply</button>

        </div>
    );
};

export default TabsJob;