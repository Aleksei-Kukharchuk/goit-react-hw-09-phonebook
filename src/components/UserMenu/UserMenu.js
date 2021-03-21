import React from 'react';
import { connect } from 'react-redux';
import s from './UserMenu.module.css'
import {authSelectors, authOperations} from '../../redux/auth'

function UserMenu({email, onLogout}) {
    return (
            <div>
                <span className={s.email}>{email}</span>
                <button type='button' onClick={onLogout}>LogOut</button>
            </div>
        )
}

const mapStateToProps = (state) => ({
    email: authSelectors.getUserEmail(state),
})

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);