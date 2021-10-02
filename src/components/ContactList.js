import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const renderContact = props.contacts.map((contact) => {
        return (
           <ContactCard contacts={contact}/>
        )
    })

    return (
        <div className="ui celled list">
            {renderContact}
        </div>
    )
}

export default ContactList
