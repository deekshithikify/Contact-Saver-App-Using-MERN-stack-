import { useState, useEffect } from 'react';
import axios from '../axios';

const ContactForm = ({ fetchContacts, editContact, setEditContact }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (editContact) setForm(editContact);
  }, [editContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editContact) {
      await axios.put(`/contacts/${editContact._id}`, form);
      setEditContact(null);
    } else {
      await axios.post('/contacts', form);
    }
    setForm({ name: '', email: '', phone: '' });
    fetchContacts();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">{editContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;
