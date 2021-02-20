import React, { useState } from 'react';

const Home = (props) => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count+1)
    }
     const decrementCount = () => {
        setCount(count-1)
    }
    return (
        <>
            <h3>id:{props.information.id }This is: {props.information.name}</h3>
            <p>Library:{ props.information.library }</p>
            <p>Framework:{props.information.framework}</p>
            

            <h3>{count}</h3>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </>
    );
};

export default Home;