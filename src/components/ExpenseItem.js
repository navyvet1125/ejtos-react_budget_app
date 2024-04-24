import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoMdAddCircle, IoMdRemoveCircle  } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import styles from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoMdAddCircle className={styles.okay} size='2.5em' onClick={event=> increaseAllocation(props.name)} /></td>
        <td><IoMdRemoveCircle className={styles.danger} size='2.5em' onClick={event=> decreaseAllocation(props.name)} /></td>
        <td><TiDelete className={styles.danger} size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;