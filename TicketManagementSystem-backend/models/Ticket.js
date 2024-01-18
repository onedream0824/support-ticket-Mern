const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  email: String,
  title: String,
  imageUri: String,
  description: String,
  comment: String,
  status: { type: String, enum: ['new', 'in progress', 'resolved'], default: 'new' },
  createdAt: { type: Date, default: Date.now },
});

ticketSchema.methods.updateStatus = async function ({newStatus, comment}) {
    this.status = newStatus;
    this.comment =  comment;
    try {
        return  this.save()
    } catch (error) {
        console.log(error);
    }
  };

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
