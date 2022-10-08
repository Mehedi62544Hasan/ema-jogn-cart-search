import React from 'react';
import './Cart.css'

const Cart = ({cart, cliarCart, children}) => {
     let total = 0;
    let shipping = 0;
    
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tex = (total * 0.1).toFixed(2);
    const grandtotal = total + shipping + parseFloat(tex)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tex}</p>
            <p>Grand Total: {grandtotal.toFixed(2)}</p>
            <button onClick={cliarCart}>Cliar All</button>
            {children}
        </div>
    );
};


const student1= {name: "rafique", marks: 79, result: "A+"};
// console.log(student1.marks + 1);

export default Cart;