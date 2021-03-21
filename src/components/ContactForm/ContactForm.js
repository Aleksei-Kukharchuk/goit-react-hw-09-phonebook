import { useState } from 'react'
import PropTypes from 'prop-types'
import s from "./ContactForm.module.css"

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = evt => {
         setName(evt.currentTarget.value)
    };

     const handleNumberChange = evt => {
         setNumber(evt.currentTarget.value)
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        onSubmit({name,number})
    };

    return (
                <form onSubmit={handleSubmit} className={s.form}>
                    <label className={s.label}>
                        Name:
                        <input
                            type="text"
                            name='name'
                            onChange={handleNameChange}
                            className={s.input} />
                    </label>
                    <label className={s.label}>
                        Number:
                        <input
                            type="phonenumber"
                            name='number'
                            onChange={handleNumberChange}
                            className={s.input} />
                    </label>
                    
                    <button type="submit" className={s.button}>Add contact</button>
                </form>
        )
}

/* class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name] : value });
    };

    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state)
    };

    render() {
        const { name, number } = this.state;

        return (
                <form onSubmit={this.handleSubmit} className={s.form}>
                    <label className={s.label}>
                        Name:
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            className={s.input} />
                    </label>
                    <label className={s.label}>
                        Number:
                        <input
                            type="phonenumber"
                            name='number'
                            value={number}
                            onChange={this.handleChange}
                            className={s.input} />
                    </label>
                    
                    <button type="submit" className={s.button}>Add contact</button>
                </form>
        )
    }
} */

ContactForm.propType = {
    onSubmit: PropTypes.func,
}