import React from 'react'
import Part from './Part'

const Content = (props) => {  

    return (
        <>
            {
            // Looping through the array with map(), each time returning a new Part component to render, with info from the current part.    
            props.parts.map(({id, name, excercises}) => {
                return <Part key={id} info={name} noOfExcercises={excercises} />
            })
            }
        </>
      )
}

export default Content;