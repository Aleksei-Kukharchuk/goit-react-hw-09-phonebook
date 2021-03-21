import {  useState } from 'react';
import { connect } from 'react-redux';
import s from './RegisterPage.module.css'
import { authOperations } from '../../redux/auth'

function RegisterPage({ onRegister }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleNameChange = evt => {
        setName(evt.currentTarget.value);
    }

    const handleEmailChange = evt => {
        setEmail(evt.currentTarget.value);
    }

    const handlePasswordChange = evt => {
        setPassword(evt.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        onRegister({ name, email, password});

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
            <div className={s.container}>
                <h1>Страница регистрации</h1>

                <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
                    <label className={s.label}>
                    <span className={s.span}>Имя:</span>
                    <input
                        type="text"
                        name="name"
                        onChange={handleNameChange}
                        className={s.input} />
                    </label>

                    <label className={s.label}>
                    <span className={s.span}>Почта:</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        className={s.input}
                    />
                    </label>

                    <label className={s.label}>
                    <span className={s.span}>Пароль:</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                        className={s.input}
                    />
                    </label>

                    <button type="submit" className={s.button}>Зарегистрироваться</button>
                </form>
            </div>
        )
}

/* class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
        this.props.onRegister(this.state);

        this.setState({name: '', email: '', password: ''})
    }

    render() {
        const { name,email, password } = this.state;

        return (
            <div className={s.container}>
                <h1>Страница регистрации</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off" className={s.form}>
                    <label className={s.label}>
                    <span className={s.span}>Имя:</span>
                    <input type="text" name="name" value={name} onChange={this.handleChange} className={s.input} />
                    </label>

                    <label className={s.label}>
                    <span className={s.span}>Почта:</span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        className={s.input}
                    />
                    </label>

                    <label className={s.label}>
                    <span className={s.span}>Пароль:</span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        className={s.input}
                    />
                    </label>

                    <button type="submit" className={s.button}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
} */

const mapDispatchToProps = {
    onRegister: authOperations.register
}

export default connect(null, mapDispatchToProps)(RegisterPage);