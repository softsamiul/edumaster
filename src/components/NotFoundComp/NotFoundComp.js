import React from 'react';
import errorImg from '../../images/404.png';
import './NotFoundComp.css';
const NotFoundComp = () => {
    return (
        <div className="mx-auto w-3/5">
            <img src={errorImg} className="w-full" alt="" />
        </div>
    );
};

export default NotFoundComp;