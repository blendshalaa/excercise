/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Statistics from './Statistics'








function App() {

  const[good,setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);

  const handleGoodClicks=()=>{
    setGood(good+1)
  }
  
  const handleNeutralClick=()=>{
    setNeutral(neutral+1)
  }
  const handleBadClick=()=>{
    setBad(bad+1)
  }

  const totalFeedbacks=good+neutral+bad;


  return (
    <>
    <div>
  
      <h1>Give Feedback</h1>
      <div className='buttons'>
      <button onClick={handleGoodClicks}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      </div>


 {totalFeedbacks===0?(
<div> No feedback found</div>
 ):(
<Statistics good={good} neutral={neutral} bad={bad}/>

 )}
 

    </div>
     
    </>
  )
}

export default App
