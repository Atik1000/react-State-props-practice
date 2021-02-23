import React, { useState } from 'react';

const MyComponent = (props) => {
    const [count, setCount] = useState(0)
   const handleIncrement = () => {
        setCount(count+1)
   }
    const handleDecrement = () => {
        setCount(count-1)
    }
    return (
        <>
            {props.data.nav === 'Javascript' &&
                <>
                    <p>{props.data.nav}</p>
                    <p>{props.data.content}</p>
                </>
               
            }
            { props.data.nav === 'python' &&
             <>
                    <p>{props.data.nav}</p>
                    <p>{props.data.content}</p>
                </>
            }
            {/* // lifecycle practice */}
            <button onClick={handleIncrement}>Increment</button>
            <span>{ count}</span>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};

export default MyComponent;