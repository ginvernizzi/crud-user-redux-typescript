import React from 'react'

interface Props {
  error: string
}

const ErrorNotification = ({error}:Props) => {
  if(error === null){
    return <div> </div>
  }

  return (
    <div className='container' style={{border: "0px", background: 'pink', color: 'red', height: '80px', margin: '0px'}}>
      <h3>{error}</h3>
    </div>
  )
}

export default ErrorNotification