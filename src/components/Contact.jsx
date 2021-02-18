import React from 'react'

export default function Contact(props) {
    return (
        <>
           <h3>id:{props.information.id }This is: {props.information.name}</h3>
            <p>Library:{ props.information.library }</p>
            <p>Framework:{ props.information.framework }</p>
            
        </>
    )
}
