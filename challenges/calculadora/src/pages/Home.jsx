import React from 'react';
import './Home.css';

import Header from '../components/Header';
import Calculator from '../components/Calculator';

export default function(){
    return <div className='home'>
                <Header />
                <Calculator />
            </div>
}