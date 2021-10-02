import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { removeHandler } = props;
    return (
        <div>
            <div className="product">
                <div>
                    <h2 className="product-name">{name}</h2>
                    <p>Price: {price}</p>
                    <p>qty: {quantity}</p>
                    <button onClick={() => removeHandler(key)} className="btn-regular">Remove</button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItem;