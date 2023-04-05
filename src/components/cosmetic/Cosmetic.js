import React from 'react';
import './cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, _id } = props.cosmetic;
    const addToCart = (_id) => {
        console.log('item added', _id)
    }

    const addToCartWithParam = () => addToCart(_id);
    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
            <p>Only for: ${price}</p>
            <p>It has id: {_id}</p>
            <button onClick={addToCartWithParam}> Add to Cart</button>
            <button onClick={() => addToCart(_id)}> Add to Cart: Short Cut</button>
            <button onClick={() => addToCart(_id)}>Purchase</button>
        </div >
    );
};

export default Cosmetic;