import React, { useState } from "react";
import { useRef } from "react";
import { ContactFields } from './formFields';
import { BillingFields } from "./formFields";
import PropTypes from 'prop-types';
import './styles.css';


export const CustomInput = (props) => {
    const { label, message, name, placeholder, required, validation, addToOrder, removeFromErrorList } = props;
    const [ fieldValue, setFieldValue ] = useState("");
    const [ error, setError ] = useState("")
    const ref = useRef();

    const handleChange = (val) => {
        setFieldValue(val);
    }

    const handleUserStateChange = () => {
          if (required && !validation.test(fieldValue)) {
            setError(message);
            setFieldValue("");
          } else {
            removeFromErrorList(name);
            setError("");
            addToOrder(name, fieldValue);
          }
  }
  
    return (
      <div style={CustomInput.styles.container} >
        <label style={CustomInput.styles.label} >{label}</label>
        <input
          style={CustomInput.styles.input}
          value={fieldValue}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          onChange={e => handleChange(e.target.value)}
          onBlur={() => handleUserStateChange(ref)}
        ></input>
        <div style={{color: 'red'}}>{error}</div>
      </div>
    )
  }

  CustomInput.propTypes = {
    label: PropTypes.string,
    message: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    validation: PropTypes.string,
    addToOrder: PropTypes.func,
    removeFromErrorList: PropTypes.func,
  };

  CustomInput.styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1.5rem'
    },
    label: {
      marginBottom: '.5rem'
    },
    input: {
      fontSize: '1rem',
      lineHeight: 1.75,
      appearance: 'none',
      background: 'rgb(255, 255, 255)',
      border: '1px solid rgb(237, 237, 240)',
      borderRadius: '0.25rem',
      color: 'rgb(82, 77, 110)',
      fontFamily: 'larssiet, "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, Verdana, sans-serif',
      outline: 'none',
      padding: '10px 1.5rem 10px .5rem',
    }
  }