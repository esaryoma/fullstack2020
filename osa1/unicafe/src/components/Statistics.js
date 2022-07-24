import StatisticsLine from './StatisticsLine'

const goodWeight = 1
const badWeight = -1
const neutralWeight = 0
const Statistics = ({good, bad, neutral, all}) => {
    let average = ( good * goodWeight + bad * badWeight + neutral * neutralWeight) 
        / all 
    let positivePercentage = (good/all) * 100

    if (all <= 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>no feedback given...</p>
            </div>
        )
    }


    return (
        <>
          <h2>Statistics</h2>
          <table>
              <tbody>
                    <StatisticsLine text="All" value={all} />
                    <StatisticsLine text="Good" value={good} />
                    <StatisticsLine text="Neutral" value={neutral} />
                    <StatisticsLine text="Bad" value={bad} />
                    <StatisticsLine text="Average" value={average} />
                    <StatisticsLine text="Positive" value={positivePercentage} />
              </tbody>
          </table>
        </>
      )
  }

  export default Statistics;