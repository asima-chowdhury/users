import React from 'react';
import notfound from '../assets/images/NotFound.jpg';

const NotFound = () => {
    return (
        <div>
           <img src={notfound} alt="notfound" style={{width: '30%', margin:'80px 0 0 35%'}}/>
        </div>
    );
};

export default NotFound;