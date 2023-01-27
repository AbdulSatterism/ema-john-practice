import React from 'react';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props
    const { name, img, price, seller, ratings } = product
    return (
        <div className='product-component'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price :${price}</p>
                <p><small>Seller :{seller}</small></p>
                <p><small>ratings :{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;