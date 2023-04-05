import React from 'react';
import './Cosmetics.css';
import { add } from '../../utilities/Calculate';


const Cosmetics = () => {

    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to My Cosmetics Store</h1>
            <p>total: {total}</p>
        </div>
    );
};

export default Cosmetics;