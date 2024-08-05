/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react"
const Statistics=({good,bad,neutral})=>{
    return(
      <div>
        <h1>Statistics</h1>
        <p>good :{good}</p>
        <p>bad :{bad}</p>
        <p>neutral:{neutral}</p>
        <p>All : {good+neutral+bad}</p>
        <p>Average:{(good+neutral+bad)/3}</p>
      </div>
    )
    
    }

    export default Statistics