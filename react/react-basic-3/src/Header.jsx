import React from 'react'

function Header() {
    // curly brackets - used to insert js in jsx
    //dont use loop and if-else inside curly brackets
    //use ternary operator
    let headerClass='header'
    let obj={name:'sunil'}
    function greet() {
        return 'good morning'
    }
    let size= 40
    let name = 'Gagan'
    return (
        // <> is syntatic suger form (short form) of React Fragment
        <>
        {/* in inline style css properties are used as object keys
            remove hyphen and convert it into camel case 
            every value should be in string
            */}
            <p className={headerClass}>{greet()}</p>
            <p style={{backgroundColor:'red',fontSize:`${size}px`}}>hello {name} </p>
            <p>your age is {45 + 7}</p>
            {/* <p>{obj}</p>cant render object or array */}
        </>
    )
}

export default Header
