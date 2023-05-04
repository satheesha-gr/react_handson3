import React from 'react'

function FormData({displayData, goBack}) {
  return (
    <div>
        <h1 className="heading">EMPLOYEE FEEDBACK DATA</h1>
        <div id="display-form-data">{displayData}</div>
        <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default FormData