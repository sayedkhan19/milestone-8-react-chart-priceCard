import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const Pricing = ({PricingPromise}) => {
    const PricicngData = use(PricingPromise);
    // console.log(PricicngData)
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            <div className='grid  md:grid-cols-3 grid-cols-1'>
                {
                    PricicngData.map(pricing => 
                    <PricingCard pricing={pricing}
                    key={pricing.id}
                    
                    ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;