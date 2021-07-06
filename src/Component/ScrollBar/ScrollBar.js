import React, { Fragment } from 'react'
import { BsCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import './ScrollBar.css'

export default function ScrollBar(props) {
  let countVistas =
    props.length % 4 == 0 ? props.length / 4 : Math.ceil(props.length / 4)
  let itemsShowing = Items(countVistas, props.vistaActiva).slice(0, 4)
  return (
    <>
      <nav id="scrollBar" className="navScrollBar">
        {props.length > 0 && (
          <span className="cantidadItem">
            {props.vistaActiva * 4} de {props.length}
          </span>
        )}
        <div className="scrollBar">
          <>
            {props.vistaActiva > 1 ? (
              <div onClick={() => props.onChangeVista(props.vistaActiva - 1)}>
                <BsCaretLeftFill />
              </div>
            ) : (
              <div>
                <BsCaretLeftFill />
              </div>
            )}
          </>
          {itemsShowing.map((valor) => (
            <ItemScroll
              value={valor}
              max={countVistas}
              onClick={props.onChangeVista}
            />
          ))}
          <>
            {props.vistaActiva < countVistas ? (
              <div onClick={() => props.onChangeVista(props.vistaActiva + 1)}>
                <BsFillCaretRightFill />
              </div>
            ) : (
              <div>
                <BsFillCaretRightFill />
              </div>
            )}
          </>
        </div>
      </nav>
    </>
  )
}
const Items = (cant, inc) => {
  let arr = Array(cant)
    .fill(0)
    .map((v, i) => i + inc)
  return arr
}
const ItemScroll = (props) => {
  return (
    <>
      {props.value <= props.max ? (
        <span className="itemScroll" onClick={() => props.onClick(props.value)}>
          {props.value}
        </span>
      ) : (
        <span className="itemScrollOff"> {props.value} </span>
      )}
    </>
  )
}
