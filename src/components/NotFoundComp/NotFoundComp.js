import React from 'react';
import errorImg from '../../images/404.png';
import './NotFoundComp.css';
const NotFoundComp = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default NotFoundComp;