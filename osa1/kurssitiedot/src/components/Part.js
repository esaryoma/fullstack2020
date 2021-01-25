import React from 'react'

const Part = (props) => {  
    return (
      <>
        <p>
            {props.info} {props.noOfExercises}
        </p>
      </>
    )
}

export default Part;