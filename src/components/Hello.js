import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Ragha</h1>
    //     </div>
    // )
       return React.createElement(
        'div',
        {is: 'hello', className: 'dummyclass'},
        React.createElement('h1', null, 'hello ragha')
       )
    
}

export default Hello