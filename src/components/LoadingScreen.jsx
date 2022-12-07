import React from 'react';
import '../assets/styles/Loading.css'

const LoadingScreen = () => {
    return (
        <div className='overlay'>
            <div class="lds-circle"><div></div></div>
        </div>
    );
};

export default LoadingScreen;