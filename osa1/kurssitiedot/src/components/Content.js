import React from 'react'
import Part from './Part'

const Content = (props) => {  
    return (
        <>
          <Part info={props.info1} noOfExercises={props.noOfExercises1} />
          <Part info={props.info2} noOfExercises={props.noOfExercises2} />
          <Part info={props.info3} noOfExercises={props.noOfExercises3} />
        </>
      )
}

export default Content;