const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.send(contact);
});

// Read
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

// Update
router.put('/:id', async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(contact);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted successfully' });
});

module.exports = router;
