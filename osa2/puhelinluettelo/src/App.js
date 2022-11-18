import './App.css';
import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-1234' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const DEFAULT_TEXT_FOR_INPUT_NAME = 'Input new name...'
  const DEFAULT_TEXT_FOR_INPUT_NUMBER = 'Input new number...'
  const [newName, setNewName] = useState(DEFAULT_TEXT_FOR_INPUT_NAME)
  const [newNumber, setNewNumber] = useState(DEFAULT_TEXT_FOR_INPUT_NUMBER)

  // persons.concat(newName) creates a new array with content of persons and adds newName
  const handleAddNewName = (event) => {
    event.preventDefault()
    if (!doesNotAlreadyExist(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      let newPerson = createNewPerson(newName, newNumber)
      setPersons(persons.concat(newPerson))
      setNewName(DEFAULT_TEXT_FOR_INPUT_NAME)
      setNewNumber(DEFAULT_TEXT_FOR_INPUT_NUMBER)
    }
  }

  const doesNotAlreadyExist = (name) => {
    console.log('alreadyExists: ', name)
    let doesNotAlreadyExist = persons.every(person => {
      return person.name !== name ? true : false
    })
    console.log('Does it already exist?: ', doesNotAlreadyExist)
    return doesNotAlreadyExist
  }

  const createNewPerson = (name, number) => {
    return {
      name: name,
      number: number
    }
  }

  // State newName is updated each time name input field is modified
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }  

  const handleFilter = (event) => {
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleFilter} /></div>
      <form onSubmit={handleAddNewName}>
        <div>
          name: <input onChange={handleInputChange} value={newName} />
        </div>
        <div>number: <input onChange={handleNumberChange} value={newNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug newName: {newName}</div>
      <div>debug newNumber: {newNumber}</div>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.name} person={person} />)
      )}
    </div>
  )

}

export default App;
