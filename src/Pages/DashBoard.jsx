import React from 'react';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {
    return (
        <div>
            <Helmet title='Gen-Z_R|Dash Board' />
            <div className="text-7xl text-green-500 px-40 py-24">it's LoCK <br />[ <span className='text-9xl text-red-500'>  P R I V A T E  </span>]</div>
        </div>
    );
};

export default DashBoard;