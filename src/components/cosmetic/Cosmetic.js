import React from 'react';
import './cosmetic.css';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, _id } = props.cosmetic;
    const addToCart = (_id) => {
        addToDb(_id)
    }

    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
            <p>Only for: ${price}</p>
            <p>It has id: {_id}</p>

            <button onClick={() => addToCart(_id)}>Add To Card</button>
        </div >
    );
};

export default Cosmetic;