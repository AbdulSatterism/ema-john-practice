import { getStoredData } from "../utilities/fakedb";

export const productAndCartAdd = async () => {
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get cart data 
    const savedCart = getStoredData();
    const initialCart = []
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }

    return { products, initialCart };
}