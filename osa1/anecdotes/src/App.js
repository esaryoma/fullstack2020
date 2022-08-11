import './App.css';
import { useState } from 'react'
import Button from './components/Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  //let points = new Uint8Array(anecdotes.length)
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const displayRandomAnecdote = () => {
    let index
    let numberOfAnecdotes
    do {
      numberOfAnecdotes = anecdotes.length
      index = Math.floor(Math.random() * numberOfAnecdotes)
      //console.log('Random number between 0 and ', numberOfAnecdotes, ': ', index)
    } while (index === selected) // do not display the same anecdote twice in a row
    setSelected(index)
  }

  const vote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  /**
   * From https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
   * @returns The index of the anecdote with most votes
   */
  const indexOfAnecdoteWithMostPoints = () => {
    let largestValue = Math.max(...points)
    //console.log('Largest votecount: ', largestValue)
    return points.indexOf(largestValue)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <p><Button handleClick={displayRandomAnecdote} text='next anecdote' /></p>
      <p><Button handleClick={vote} text='vote this one' /></p>
      <p>Anecdote with the most votes: </p>
      <p>{anecdotes[indexOfAnecdoteWithMostPoints()]}</p>
      <p>has {points[indexOfAnecdoteWithMostPoints()]} votes</p>
    </div>
  )
}

export default App;
