import './App.css';
import { useState } from 'react'
import allContacts from "./contacts.json";


function App() {
  const size = 5
  const contactList = allContacts.slice(0, size)

  const [contacts, setContacts] = useState(contactList)

  const addContact = () => {
    const copy = allContacts.slice()
    const newContact = copy[Math.floor(Math.random() * copy.length)]
    if(!contacts.includes(newContact)){
      setContacts([newContact, ...contacts])
    } else {
      addContact()
    }
  }
 
  const sortNames = () => {
    const copy = contacts.slice()
    copy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts([...copy])
  }

  const sortPopularity = () => {
    const copy = contacts.slice()
    copy.sort((a, b) => b.name.localeCompare(a.name))
    setContacts([...copy])
  }

  const deleteContact = (id) => {
    console.log(id)
    const index = contacts.findIndex(object => object.id === id)
    console.log(index)
    const copy = contacts.slice()
    copy.splice(index, 1)
    setContacts(copy)
  }
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <table>
      <thead>
       <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => (
          <tr key={contact.id}>
            <td><img height="120" src={contact.pictureUrl} alt="contactImage"/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
            <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete Contact</button></td>
        </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;
