import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './jobstabs.css'
import { Link } from "react-router-dom";
import TabsJob from './TabsJob';
import { data } from 'autoprefixer';

const ReactTab = () => {
    const [fresher, setFresher] = useState([])
    const [experienced, setExperienced] = useState([])
    useEffect(() => {
        fetch('http://localhost:1111/job/Experienced').then(res => res.json()).then(data => setExperienced(data))
        fetch('http://localhost:1111/job/Fresher').then(res => res.json()).then(data => setFresher(data))
    }, [])
    return (
        <div className='mb-4'>
            <Tabs>
                <TabList className={'border-none mb-3'}>
                    <Tab className={'tab'}>Fressher jobs</Tab>
                    <Tab className={'tab'}>Experinced jobs</Tab>
                </TabList>

                <TabPanel>
                    <div className='min-h-[10rem] w-full  grid gap-2'>
                        {
                            fresher.map(ele => <TabsJob key={ele._id} data={ele}></TabsJob>)
                        }
                    </div>
                    <div className='text-center my-3'><Link className='btn btn-primary capitalize'>see all</Link></div>
                </TabPanel>
                <TabPanel>
                    <div className='min-h-[10rem] w-full  grid  gap-2'>
                        {
                            experienced.map(ele => <TabsJob key={ele._id} data={ele}></TabsJob>)
                        }
                    </div>
                    <div className='text-center my-3'><Link className='btn btn-primary capitalize'>see all</Link></div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;