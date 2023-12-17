import React from 'react'

const index = (props) => {
  return (
    <div>
        <h1>user page</h1>
        <hr />
        <p>i am transfer{props.match.params.id}</p>
    </div>
    
  )
}

export default index
