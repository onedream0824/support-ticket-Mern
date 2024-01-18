const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create a new ticket
router.post('/tickets', async (req, res) => {
  try {
    const {email, title, description, imageUri} = req.body;
    const newTicket = new Ticket({email, title, description, imageUri});
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

// Get all tickets
router.get('/tickets', async (req, res) => {
    try {
      let tickets;
  
      const { email } = req.query;
  
      if (!email) {
        tickets = await Ticket.find();
      } else {
        tickets = await Ticket.find({ email });
      }
  
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get tickets' });
    }
});

// Update the status of a ticket
router.put('/tickets/:id/status', async (req, res) => {

    console.log("Update the status of a ticket")
    try {
      const { id } = req.params;
      const { newStatus, comment } = req.body;
      const ticket = await Ticket.findById(id);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      const updatedTicket = await ticket.updateStatus({newStatus, comment});
      res.json(updatedTicket);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to update ticket status' });
    }
});
  


module.exports = router;
