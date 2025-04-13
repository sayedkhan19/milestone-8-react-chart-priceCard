import React from 'react';
import { MdOutlineDone } from "react-icons/md";

const PicingFeature = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <p className='flex gap-2'><MdOutlineDone className='w-3.5' />{feature}</p>
        </div>
    );
};

export default PicingFeature;