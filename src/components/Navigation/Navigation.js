import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import s from './Navigation.module.css'
import { authSelectors } from '../../redux/auth';

function Navigation ({isAuthenticated})  {
    return (
        <div>
            <NavLink exact to={routes.home} className={s.link}>Home</NavLink>
            {isAuthenticated && <NavLink to={routes.contacts} className={s.link}>Contacts</NavLink>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation);