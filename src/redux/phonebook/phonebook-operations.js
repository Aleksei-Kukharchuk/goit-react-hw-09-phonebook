import axios from 'axios';
import {
    addContactRequest,
    addContactSucess,
    addContactError,
    deleteContactRequest,
    deleteContactSucess, 
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSucess,
    fetchContactsError
} from './phonebook-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSucess(data)))
        .catch(error => dispatch(fetchContactsError(error.message)))
}

const addContact = contact => dispatch => {
    dispatch(addContactRequest());

    axios.post('/contacts', contact)
        .then(( {data} ) => dispatch(addContactSucess(data)))
        .catch(error => dispatch(addContactError(error.message)))
}

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
   
    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSucess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchContacts,
    addContact, 
    deleteContact,
}