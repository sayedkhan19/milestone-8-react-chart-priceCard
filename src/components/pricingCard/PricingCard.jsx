import { Key } from 'lucide';
import React from 'react';
import PicingFeature from './PicingFeature';

const PricingCard = ({pricing}) => {
      
    const {name,price,description,features} = pricing;
    // console.log(pricing)
    return (
        <div className='border bg-cyan-500 rounded-2xl space-y-2 mt-2 p-4 mx-4 flex-col'>
            {/* card header */}
            <div >
                <h1>{name}</h1>
                <h2>{price}</h2>
            </div>
            {/* card body */}
            <div className='p-4 bg-cyan-700 text-white rounded-xl flex-1 mt-10'>
             <p>{description}</p>
             {
                features.map((feature) => <PicingFeature 
                Key={feature.id}
                feature={feature}></PicingFeature>)
             }
            </div>

            <button className='btn w-full mt-4'>sebscribe</button>
        </div>
    );
};

export default PricingCard;