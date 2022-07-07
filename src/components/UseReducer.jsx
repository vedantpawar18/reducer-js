import React, { useReducer } from 'react'

const initialState={
    amount:0
};

const reducer =(state, action )=>{
    switch(action.type){
        case "incrementby1000":
            return {
                ...state,
                amount:state.amount+action.payload
            };
        case "incrementby2000":
            return {
                ...state,
                amount:state.amount+action.payload
            };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Amount</h1>
        <h3>{state.amount}</h3>
        <div>
         <button onClick={() => dispatch({type:"incrementby1000", payload:1000})}>Increment amount + 1000</button>
        </div>
        <div>
        <button onClick={() => dispatch({type:"incrementby2000", payload:2000})}>Increment amount + 2000</button>
        </div>
        
        
    </div>
  )
}

export default UseReducer