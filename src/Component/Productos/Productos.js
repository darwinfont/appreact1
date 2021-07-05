import React, { Fragment } from 'react'
import './Productos.css'

export default function Productos(props) {
  return (
    <>
      <div id="produtos" className="productos">
        <img
          src={props.value.thumbnail}
          alt="Img Producto"
          className="imgProducto"
        />
        <div className="descripcion">
          <h4> {props.value.title} </h4>
          <h4> {props.value.price} </h4>
          <span className="localizacion">{props.value.address.state_name}</span>
        </div>
        {props.detalle && (
          <div className="detalles">
            <span> Condicion: {props.value.condition} </span>
            <span> Otas descripciones </span>
          </div>
        )}
      </div>
    </>
  )
}
