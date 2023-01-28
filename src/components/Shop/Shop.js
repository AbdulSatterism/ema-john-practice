import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([])
    const products = useLoaderData();
    // clear cart
    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    // add from local storage 
    useEffect(() => {
        const storedCart = getStoredData();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className='main-container'>

            <div className="cart-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="order-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/order'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>

    );
};

export default Shop;