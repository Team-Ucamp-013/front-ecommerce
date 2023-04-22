import React from 'react'
import IndexLayout from './components/layouts'

const App = () => {

  const content = (
    <div>
      <h1>Inicio</h1>
    </div>
  )


  return (
    <IndexLayout render={content} />
  )
}

export default App
