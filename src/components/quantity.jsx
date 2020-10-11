import React, { useState, useEffect } from 'react';

export const Quantity = props => {
    const { currentStep, handleChange } = props;
    const [quantity, setQuantity ] = useState(1);
    const [price, setPrice ] = useState(49.99);

    useEffect(() => {
            setPrice(49.99 * quantity);
    }, [quantity]);


    const onChange = (val) => {
        setQuantity(val);
        handleChange("quantity", val);
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