import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const restProduct = cart.filter(product => product.id !== id);
        setCart(restProduct)
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='main-container'>
            <div className='order-review'>
                {
                    cart.map(product => <ReviewOrder
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewOrder>)
                }
                {
                    cart.length === 0 && <h2>your have no items yet.... please <Link to='/'>Shop item</Link></h2>
                }
            </div>
            <div className="order-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Orders;