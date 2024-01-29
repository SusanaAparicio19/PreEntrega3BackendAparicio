import { Ticket } from '../models/ticket.model.js';

export class TicketService {
  static async generateTicket(code, amount, purchaser, products) {
    try {
      const ticket = await Ticket.create({ code, amount, purchaser, products });
      return ticket;
    } catch (error) {
      throw new Error('Error al generar el ticket');
    }
  }
}
