import React from 'react'
import { Link } from 'react-router-dom'

function Navitems({to,text}) {
  return (
    <div>
        <li>
            <Link className='hover:underline font-medium transition-all delay-600 ease-out' to={to}>{text}</Link>
        </li>
    </div>
  )
}
export default Navitems