import React from 'react'

const Total = (props) => {
  return (
    <>
      <p>
        <b>Number of exercises {countExcercises(props.parts)}</b>
      </p>
    </>
  )
}

const countExcercises = parts => {

  // Array.reduce() usage 
  // https://www.simplilearn.com/tutorials/javascript-tutorial/array-reduce-javascript#:~:text=The%20array%20reduce%20in%20JavaScript,is%20stored%20in%20the%20accumulator.
  let sum = parts.reduce((sum, current) => {
    return sum + current.excercises
  }, 0)
  /* 
  parts.forEach(part => {
      sum += part.exercises    
  })
  */
  return sum
}

export default Total;