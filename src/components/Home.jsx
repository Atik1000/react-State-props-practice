import React from 'react';

const Home = (props) => {
    
    return (
        <>
            <h3>id:{props.information.id }This is: {props.information.name}</h3>
            <p>Library:{ props.information.library }</p>
            <p>Framework:{ props.information.framework }</p>
        </>
    );
};

export default Home;