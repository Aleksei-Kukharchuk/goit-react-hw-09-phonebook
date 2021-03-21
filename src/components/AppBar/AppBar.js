import React from 'react'
import { connect } from 'react-redux'
import s from './AppBar.module.css'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav'
import UserMenu from '../UserMenu'
import {authSelectors} from '../../redux/auth'

function AppBar({isAuthenticated}) {
    return (
        <header className={s.header}>
            <Navigation />
            {isAuthenticated ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(AppBar);