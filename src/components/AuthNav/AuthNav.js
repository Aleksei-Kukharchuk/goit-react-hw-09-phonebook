import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import s from './AuthNav.module.css'

function AuthNav ()  {
    return (
        <div>
            <NavLink exact to={routes.login} className={s.link}>Login</NavLink>
            <NavLink to={routes.register} >Register</NavLink>
        </div>
    )
}

export default AuthNav;