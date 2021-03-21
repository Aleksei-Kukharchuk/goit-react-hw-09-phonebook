import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {phonebookOperations, phonebookSelectors} from '../../redux/phonebook'
import Section from '../Section'
import ContactForm from '../ContactForm'
import ContactList from "../ContactList"
import Filter from "../Filter"
import Notification from '../Notification'
import s from './Contacts.module.css'
import fade from '../../fade.module.css'

function Contacts({contacts, addContact}) {
  const [NotificationData, setNotificationData] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  function closeNotification() {
    setTimeout(() => {
       setShowNotification(false)
    }, 2000);
  }

  const formSubmitHandler = data => {

    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      setNotificationData(`${data.name} is already in contacts`)
      setShowNotification(true)
      closeNotification()
      return
    } else if (data.name === '') {
      setNotificationData(`Name field are empty`)
      setShowNotification(true)
      closeNotification()
      return
    } else if (data.number === '') {
      setNotificationData(`Number field are empty`)
      setShowNotification(true)
      closeNotification()
      return
    }
   
    addContact(data);
  }

  return (
      <div className={s.container}>
        <Section title='Phonebook'>
          <ContactForm onSubmit={formSubmitHandler}/>
        </Section>
        <Section title='Contacts'>
          <Filter/>
        </Section>
        <ContactList/>
        <CSSTransition in={showNotification}
          timeout={250}
          classNames={fade}
          unmountOnExit>
           <Notification alert={NotificationData}/>
        </CSSTransition>
      </div>
    );
}

/* class Contacts extends Component {

  state = {
    NotificationData: '',
    showNotification: false
  }

  formSubmitHandler = data => {

    const { contacts, addContact } = this.props;

    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      this.setState({showNotification: true, NotificationData: `${data.name} is already in contacts`})
      this.closeNotification()
      return
    } else if (data.name === '') {
      this.setState({showNotification: true, NotificationData: `Name field are empty`})
      this.closeNotification()
      return
    } else if (data.number === '') {
      this.setState({showNotification: true, NotificationData: `Number field are empty`})
      this.closeNotification()
      return
    }
   
    addContact(data);
  }

  closeNotification() {
    setTimeout(() => {
      this.setState({ showNotification: false })
    }, 2000);
  }
  
  render() {
    const { showNotification, NotificationData } = this.state;

    return (
      <div className={s.container}>
        <Section title='Phonebook'>
          <ContactForm onSubmit={this.formSubmitHandler}/>
        </Section>
        <Section title='Contacts'>
          <Filter/>
        </Section>
        <ContactList/>
        <CSSTransition in={showNotification}
          timeout={250}
          classNames={fade}
          unmountOnExit>
           <Notification alert={NotificationData}/>
        </CSSTransition>
      </div>
    );
  }
} */

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
})

const mapDispatchToProps = dispatch => ({
  addContact: (data) => dispatch(phonebookOperations.addContact(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);