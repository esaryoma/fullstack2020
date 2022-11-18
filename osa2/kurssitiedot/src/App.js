
import Course from './components/Course.js'

const App = () => {
  const courses = [
    // Course 1
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          excercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          excercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          excercises: 14,
          id: 3,
        }, 
        {
          name: 'Test course part',
          excercises: 5,
          id: 4,
        }
      ]
    },
    // Course 2
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          excercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          excercises: 7,
          id: 2,
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => {
        return <Course course={course} />
        }
      )}
    </div>
  )
}


export default App