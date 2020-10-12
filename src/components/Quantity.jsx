import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Quantity = props => {
    const { currentStep, addToOrder } = props;
    const [quantity, setQuantity ] = useState(1);
    const [price, setPrice ] = useState("49.99");

    useEffect(() => {
            setPrice((49.99 * quantity).toString());
    }, [quantity]);


    const onChange = (val) => {
        setQuantity(val);
        addToOrder("quantity", val);
        addToOrder("total", price);
    }

    return (
        currentStep === 'QUANTITY' ? 
            <div>
                <label>Quantity</label>
                <select name="quantity" onChange={(e) => onChange(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>

                <h4>Price: ${price} </h4>
            </div>
        : <div></div>
    )
}

Quantity.propTypes = {
    addToOrder: PropTypes.func,
    currentStep: PropTypes.string,
};
