import React, { use } from 'react';

const MarkChart = ({marksPromise}) => {
    const markDataRes = use(marksPromise)
    const markData = markDataRes.data;
    return (
        <div>
            
        </div>
    );
};

export default MarkChart;