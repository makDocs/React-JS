import React from 'react'
import {NavLink} from 'react-router-dom'
export default (props) => {
    return (
        <ul>
            <li>
                <NavLink to='/' >comment</NavLink>
            </li>
            <li>
                <NavLink to='/cart' >cart</NavLink>
            </li>
            <li>
                <NavLink to='/window' >window</NavLink>
            </li>
        </ul>
    )
}
