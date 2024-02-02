import React from 'react'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import sair from '../assets/icons/sair.svg'
import FintechSVG from '../FintechSVG'
import { NavLink } from 'react-router-dom'


const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
     <FintechSVG title={'Fintech Logo'} />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to='/'>Resumo </NavLink>
        </li>
        <li>
        <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to='/vendas'>Vendas</NavLink>
        </li>
        <li>
        <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
