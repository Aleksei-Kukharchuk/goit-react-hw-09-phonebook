import { React, useState } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './LoginPage.module.css';

function LoginPage({ onLogin }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = evt => {
        setEmail(evt.currentTarget.value)
    }

     const handlePasswordChange = evt => {
         setPassword(evt.currentTarget.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        onLogin({email, password});

        setEmail('')
        setPassword('')
    }

    return (
            <div className={s.container}>
                <h1>Страница логина</h1>
                <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
                    <label className={s.label}>
                        <span className={s.span}>Почта:</span>
                         <input
                            type="email"
                            name="email"
                            valur={email}
                            onChange={handleEmailChange}
                            className={s.input}
                        />
                    </label>

                    <label className={s.label}>
                        <span className={s.span}>Пароль:</span>
                         <input
                            type="password"
                            name="password"
                            valur={password}
                            onChange={handlePasswordChange}
                            className={s.input}
                        />
                    </label>
                    
                <button type="submit" className={s.button}>Войти</button>
                </form>
            </div>
        )
}

/* class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({name: '', email: '', password: ''})
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className={s.container}>
                <h1>Страница логина</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off" className={s.form}>
                    <label className={s.label}>
                        <span className={s.span}>Почта:</span>
                         <input
                            type="email"
                            name="email"
                            valur={email}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>

                    <label className={s.label}>
                        <span className={s.span}>Пароль:</span>
                         <input
                            type="password"
                            name="password"
                            valur={password}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>
                    
                <button type="submit" className={s.button}>Войти</button>
                </form>
            </div>
        )
    }
} */

const mapStateToProps = state => ({
    error: authSelectors.getError(state)
})

const mapDispatchToProps = {
    onLogin: authOperations.login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);