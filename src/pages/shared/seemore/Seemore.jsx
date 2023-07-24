import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Seemore = () => {
    const data = useLoaderData()
    const { company, description, brief_description, location, image_url } = data
    const navigation = useNavigate()
    const goBack = () => {
        navigation(-1)
    }
    return (
        <div className="md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto my-5">
            <div className=" bg-base-100 shadow-xl grid grid-cols-5 gap-5">
                <figure className='col-span-5 md:col-span-2 '><img src={image_url} className='w-full h-48 md:h-full rounded-md bg-gray-300' alt="Album" /></figure>
                <div className="col-span-5 md:col-span-3 p-2">
                    <h2 className="card-title">{company}</h2>
                    <p>{brief_description}</p>
                    <p>About us: {description}</p>
                    <div className="card-actions justify-start my-2">
                        <button onClick={goBack} className="btn btn-primary">go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seemore;