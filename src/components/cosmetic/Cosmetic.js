import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <h2>Buy this: {name} </h2>
            <p>Only for: ${price}</p>
            <p>It has id: {id}</p>
        </div>
    );
};

export default Cosmetic;