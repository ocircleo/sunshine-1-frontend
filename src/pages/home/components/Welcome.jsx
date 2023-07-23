import React from 'react';

const Welcome = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-blue-200 min-h-[25rem] px-2 md:px-12'>
            <div className='p-3 text-left col-span-1 flex items-start gap-4 justify-center flex-col'>
                <h1 className='text-3xl py-3 self-start'>Find your dream job today</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consectetur eveniet optio! Atque velit, maxime tempore ex necessitatibus a, veniam ullam magnam libero esse hic explicabo modi distinctio error sit?</p>
                <button className='btn btn-primary'>See all jobs</button>
            </div>

            <form className='col-span-1 flex items-center flex-col justify-center flex-wrap  gap-2'>
                
                <input type="text" placeholder="Type here" className="input flex-shrink-0 input-bordered w-full max-w-xs" />
                <select className="select select-bordered w-full max-w-xs flex-shrink-0">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs flex-shrink-0">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <button className='btn btn-primary flex-shrink-0'>serch</button>


            </form>
        </div>
    );
};

export default Welcome;