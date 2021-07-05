import React, { Fragment, useState } from 'react'
import './BoxResult.css'
import ScrollBar from '../ScrollBar/ScrollBar.js'
import Productos from '../Productos/Productos.js'

export default function BoxResult(props) {
  const [vista, setVista] = useState(1, [])
  return (
    <>
      <main className="mainResult">
        <ScrollBar
          length={props.results.length}
          vistaActiva={vista}
          onChangeVista={setVista}
        />
        <div>
          {toShow(props.results, vista).map((item) => {
            return <Productos value={item} detalle />
          })}
        </div>
        <ScrollBar
          length={props.results.length}
          vistaActiva={vista}
          onChangeVista={setVista}
        />
      </main>
    </>
  )
}
const toShow = (arr, vista, cant = 4) => {
  const ini = vista == 1 ? 0 : vista * cant - cant
  const fin = vista == 1 ? cant : vista * cant
  return arr.slice(ini, fin)
}
