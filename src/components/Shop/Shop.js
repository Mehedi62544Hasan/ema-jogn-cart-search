import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);

    const cliarCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }

    useEffect(() =>{
        const storeCart = getStoredCart();
        const newProduct = [];
         for(const id in storeCart){
            const addedProduct = products.find(produk => produk.id === id)
            if(addedProduct){
                 const quantit = storeCart[id];
                 addedProduct.quantity = quantit;
                 newProduct.push(addedProduct);
             }
        }
        setCart(newProduct)
    }, [products])

    const handleAddToCart = (product) =>{
        console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
     

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
              <Cart 
              cliarCart={cliarCart}
              cart = {cart}>
                <Link to='/orders'>
                <button>Review Items</button></Link>
              </Cart>
            </div>
        </div>
    );
};

export default Shop;