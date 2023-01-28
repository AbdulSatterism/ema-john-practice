import React from 'react';
import './ReviewOrder.css'

const ReviewOrder = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, id, shipping, img } = product;

    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="info-container">
                <div className='info-details'>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Shaipping: ${shipping}</small></p>
                    <p><small>quantity: {quantity}</small></p>
                </div>
                <div className='delete-button'>
                    <button onClick={() => handleRemoveItem(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;