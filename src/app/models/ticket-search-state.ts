import { Ticket } from './ticket';
import { HttpErrorResponse } from '@angular/common/http';

export interface TicketSearchState {
  ticketVal: string;
  tickets: Ticket[];
  httpError: HttpErrorResponse;
}
