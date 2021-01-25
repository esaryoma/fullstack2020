import React from 'react'

const Total = (props) => {  
    return (
      <>
        <p>
            Number of exercises {countExercises(props.parts)}
        </p>
      </>
    )
}

const countExercises = parts => {
    let sum = 0
    parts.forEach(part => {
        sum += part.exercises    
    })

    return sum
}

export default Total;