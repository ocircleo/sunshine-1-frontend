import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TabsJob from '../home/components/TabsJob';

const Serch = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto">
            {
                data.length > 0 ? data.map(ele => <TabsJob key={ele.id} data={ele}></TabsJob>) : <p className='text-center py-5'>Nothing  found</p>
            }
        </div>
    );
};

export default Serch;