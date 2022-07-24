import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Komponentin saamat propsit asetetaan suoraan muuttujiin name ja age
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

const TimedCounter = (props) => {
  /**
   * Kutsu saa aikaan sen, että komponentille luodaan tila, joka saa alkuarvokseen nollan. Metodi palauttaa taulukon, jossa on kaksi alkiota. Alkiot otetaan taulukon destrukturointisyntaksilla talteen muuttujiin counter ja setCounter.
   * Muuttuja counter pitää sisällään tilan arvon joka on siis aluksi nolla. Muuttuja setCounter taas on viite funktioon, jonka avulla tilaa voidaan muuttaa.
   */
  const [ counter, setCounter ] = useState(0)

  /**
   * Sovellus määrittelee funktion setTimeout avulla, että tilan counter arvoa kasvatetaan yhdellä sekunnin päästä:
   */
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

const ButtonCounter = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// Poista kommenttimerkintä riippuen mitä komponenttia haluat demota.
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<TimedCounter />, document.getElementById('root'))
ReactDOM.render(<ButtonCounter />, document.getElementById('root'))