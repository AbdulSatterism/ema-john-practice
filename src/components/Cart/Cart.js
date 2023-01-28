import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    // console.log(cart)
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice += product.price * product.quantity;
        shipping += product.shipping;
    }
    // 10 % tax
    const tax = parseFloat((totalPrice * 0.1).toFixed(2))
    // grand total 
    const grandTotal = (totalPrice + shipping + tax)
    return (
        <div className="order">
            <h2>Order Summary</h2>
            <p>Total Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping Fee:${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>

            <button onClick={clearCart}>Clear cart</button>
            <br />
            {children}
        </div>
    );
};

export default Cart;