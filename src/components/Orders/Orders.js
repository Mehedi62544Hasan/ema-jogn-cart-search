import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
 import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { previousCart} = useLoaderData();
     const [cart, setCart] = useState(previousCart)
 
    const removeToCart = (id) =>{
         const remaining = cart.filter(product => product.id !== id);
         console.log(remaining)
                setCart(remaining);
                removeFromDb(id)
    }
    const cliarCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    
     return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(review => <ReviewItems
                        key={review.id}
                         review={review}
                         removeToCart={removeToCart}
                         ></ReviewItems>
                         )
                }
                {
                    cart.length === 0 && <h2>No Items for review. Pless <Link to='/'>Shop more</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart cliarCart={cliarCart} cart={cart}>
                    <Link to='/'>
                    <button>Home</button>
                    </Link>
                </Cart>
            </div>
         </div>
    );
};

export default Orders;