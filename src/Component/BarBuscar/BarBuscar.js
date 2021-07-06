import React, { Fragment, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { testObj, filter } from '../dfs-func.js'
import Zapatos from '../../Zapatos.json'
import './BarBuscar.css'

const BarBuscar = (results) => {
  const [inSearch, setSearch] = useState('', [])

  const search = (e) => {
    e.preventDefault()
    inSearch.length > 0 &&
      results(filter(Zapatos.results, (value) => testObj(value, inSearch)))
  }
  const onChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
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
