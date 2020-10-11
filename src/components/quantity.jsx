import React, { useState, useEffect } from 'react';

export const Quantity = () => {
    const [quantity, setQuantity ] = useState(0);
    const [price, setPrice ] = useState(0);

    useEffect(() => {
            setPrice(100 * quantity);
    }, [quantity]);


    const onChange = (val) => {
        setQuantity(val);
    }

    return (
        <div>
            <label>Quantity</label>
            <select name="quantity" onChange={(e) => onChange(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>

            <h4>Price: {price || 0} </h4>
        </div>
    )
}