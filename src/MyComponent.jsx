import React from 'react';

const MyComponent = (props) => {
    console.log(props);
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
            
        </>
    );
};

export default MyComponent;