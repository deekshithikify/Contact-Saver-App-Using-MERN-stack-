import axios from '../axios';

const ContactList = ({ contacts, fetchContacts, setEditContact }) => {
  const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div className="card-container">
      {contacts.map((contact) => (
        <div key={contact._id} className="card">
          <h3><b>{contact.name}</b></h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setEditContact(contact)}>Edit</button>
          <button onClick={() =>deleteContact(contact._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default ContactList;
