import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // tallenna napit omaan tilaansa
  const [goodClicks, setGood] = useState(0)
  const [neutralClicks, setNeutral] = useState(0)
  const [badClicks, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  // Event handlers for the 3 buttons
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(badClicks+1)
  }

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(goodClicks+1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutralClicks+1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics
        all={allClicks}
        good={goodClicks}
        bad={badClicks}
        neutral={neutralClicks} />
    </div>
  )
}

export default App