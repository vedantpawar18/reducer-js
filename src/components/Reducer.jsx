import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';

const initialState={
    amount:0
};

const reducer =(state, action )=>{
    switch(action.type){
        case "increment":
            return {
                ...state,
                amount:state.amount+action.payload
            };
        case "decrement":
            return {
                ...state,
                amount:state.amount-action.payload
            };
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [addedpay, setAddedpay]= useState(0);
    const [subpay, setSubpay]= useState(0);
    
    const handleAdd =(e)=>{
        setAddedpay(e.target.value)
    }

    const handleSub =(e)=>{
        setSubpay(e.target.value)
    }

    
  return (
    <div>
        <h1>Handle Random Input Actions</h1>
        <h1>Amount</h1>
        <h3>{state.amount}</h3>

        <div>
            <input onChange={handleAdd} type="number" />
            <button onClick={() => dispatch({type:"increment", payload:+addedpay})}>Add</button>
        </div>
        <div>
            <input onChange={handleSub} type="number" />
            <button onClick={() => dispatch({type:"decrement", payload:+subpay})}>Reduce</button>
        </div>
    </div>
  )
}

export default Reducer