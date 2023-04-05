import React from 'react';
import { add, multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const total = add(first, second);
    return (
        <div>
            <h2>This is Shoes Components</h2>
            <p>Result: {result}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Shoes;