import React from 'react';

const TopItCompany = ({ data }) => {
    let {company,brief_description,image_url} = data
    return (

        <div className="card card-compact rounded col-span-6 md:col-span-3 lg:col-span-2 bg-base-100 w-full shadow-xl">
            <figure className='h-36 bg-gray-300 '><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{company}</h2>
                <p>{brief_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>

    );
};

export default TopItCompany;