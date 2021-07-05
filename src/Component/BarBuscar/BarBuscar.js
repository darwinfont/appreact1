import React, { Fragment, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { testObj, filter } from '../dfs-func.js'
import Zapatos from '../../Zapatos.json'
import './BarBuscar.css'

const BarBuscar = (results) => {
  const [inSearch, setSearch] = useState('', [])
  //Verificar y elimar respJson
  const respJson = Zapatos.results

  const search = (e) => {
    e.preventDefault()
    results(filter(respJson, (value) => testObj(value, inSearch)))
  }
  const onChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  /* useEffect(() => {
    fetch('./scr/Zapatos.json')
      .then((response) => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        } else throw new Error('Error fetch Zapatos')
      })
      .then((data) => {
        console.log(data.result.length)
        setRespJson(data.result)
      })
      .catch((reject) => console.log(reject))
  })*/
  return (
    <>
      <form className="formSearch" onChange={onChange}>
        <input type="text" className="searchIn" />
        <div className="buttonSearch" onClick={search}>
          <AiOutlineSearch />
        </div>
      </form>
    </>
  )
}

export default BarBuscar
