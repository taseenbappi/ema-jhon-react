import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart] = useCart();
    return (
        <div>
            <h2>This is Order Review</h2>
            <h1>Total Products: {products.length}</h1>
            <p>use Card:{cart.length} </p>
        </div>
    );
};

export default OrderReview;