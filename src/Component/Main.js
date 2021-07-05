import React, { useState } from 'react'
import Header1 from './Header/Header.js'
import BarBuscar from './BarBuscar/BarBuscar.js'
import Logo from './Logo/Logo.js'
import BoxResult from './BoxResult/BoxResult.js'

const Main = () => {
  const [result, setResult] = useState([], [])
  return (
    <div className="App">
      {Header1(Logo(), BarBuscar(setResult))}
      <div>
        <BoxResult results={result} />
      </div>
    </div>
  )
}
export default Main
