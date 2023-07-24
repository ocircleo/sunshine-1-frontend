import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TabsJob from '../home/components/TabsJob';

const Serch = () => {
    const data = useLoaderData();
    return (
        <div className="md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto">
            {
                data.map(ele => <TabsJob></TabsJob>)
            }
        </div>
    );
};

export default Serch;