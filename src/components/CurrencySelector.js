// Desc: CurrencySelector component to select currency

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);
    const [currentCurrency, setCurrentCurrency] = useState('$ Dollar');

    const handleCurrencyChange = (eventKey, event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey
        });
        setCurrentCurrency(event.target.text);
    };

    return (
        <div>
        <Dropdown id='CurrencySelector' onSelect={handleCurrencyChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='alert alert-secondary'>
            Currency ({currentCurrency})
        </Dropdown.Toggle>
  
        <Dropdown.Menu className='alert alert-success' style={{ margin: 0, paddingInline:'0' , border: 'green 1px solid' }}>
          <Dropdown.Item eventKey='$'>$ Dollar</Dropdown.Item>
          <Dropdown.Item eventKey='£'>£ Pound</Dropdown.Item>
          <Dropdown.Item eventKey='€'>€ Euro</Dropdown.Item>
          <Dropdown.Item eventKey='₹'>₹ Ruppee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    );
}

export default CurrencySelector;