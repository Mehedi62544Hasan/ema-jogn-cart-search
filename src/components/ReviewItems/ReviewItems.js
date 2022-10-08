import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({review, removeToCart}) => {
    const {id,img, name,shipping, price, quantity} = review;
     return (
        <div className='review-items'>
          <img src={img} alt="" />
            <div className='review-container'>
                <div className='review-details'>
                    <p>Name: {name}</p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Price: ${price}</small></p>
                </div>
                <div>
                    <button 
                    onClick={()=>removeToCart(id)}
                    className='delete-btn'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
         </div>
    );
};

export default ReviewItems;