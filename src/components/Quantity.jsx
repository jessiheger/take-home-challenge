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
                <div style={Quantity.styles.rowContainer}>
                    <label>Quantity</label>
                    <select name="quantity" onChange={(e) => onChange(e.target.value)} style={Quantity.styles.select}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div style={Quantity.styles.rowContainer}>Price: ${price} </div>
            </div>
        : <div></div>
    )
}

Quantity.propTypes = {
    addToOrder: PropTypes.func,
    currentStep: PropTypes.string,
};

Quantity.styles = {
    select: {
        padding: '.25rem',
        fontFamily: 'larssiet, "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, Verdana, sans-serif',
        marginLeft: '10px',
        borderRadius: '.25rem',
        width: '15%',
    },
    rowContainer: {
        marginBottom: '1rem'
    }
}
