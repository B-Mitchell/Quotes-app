import React from 'react'
import { PhoneCall , HouseLine , PencilSimpleLine} from 'phosphor-react'
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {



  return (
    <>
    <nav>
        <h3 className='navMainText'>Quotes.Online</h3>

        <div className='nav1'>
        <Link to="/" className='links'>
          <HouseLine size={32} />
        </Link>
        <Link to="/create" className='phoneIcon links'>
        <PencilSimpleLine size={32} />
      </Link>
        <Link to="/contact" className='phoneIcon links'>
          <PhoneCall size={32}/>
        </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar