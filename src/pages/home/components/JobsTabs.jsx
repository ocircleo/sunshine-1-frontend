import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './jobstabs.css'
import JobtabsCard from './JobtabsCard';
import { Link } from "react-router-dom";
let aaa = [1, 2, 3, 5, 6, 3]
const JobsTabs = () => {
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
                            aaa.map(ele => <JobtabsCard></JobtabsCard>)
                        }
                    </div>
                    <div className='text-center my-3'><Link className='btn btn-primary capitalize'>see all</Link></div>
                </TabPanel>
                <TabPanel>
                    <div className='min-h-[10rem] w-full  grid  gap-2'>
                        {
                            aaa.map(ele => <JobtabsCard></JobtabsCard>)
                        }
                    </div>
                        <div className='text-center my-3'><Link className='btn btn-primary capitalize'>see all</Link></div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobsTabs;