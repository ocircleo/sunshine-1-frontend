import React from 'react';

const TopItCompany = () => {
    return (

            <div className="card card-compact rounded col-span-6 md:col-span-3 lg:col-span-2 bg-base-100 w-full shadow-xl">
                <figure className='h-36 bg-gray-300 '><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Upstrem</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
 
    );
};

export default TopItCompany;