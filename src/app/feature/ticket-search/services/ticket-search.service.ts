import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '@app/models';
import { Observable } from 'rxjs';


@Injectable()
export class TicketSearchService {
  constructor(private http: HttpClient) {}

  // getTicket = (value: string): Observable<Ticket[]> => this.http.get<Ticket[]>('../../../mocks/ap-lookup.json');
  getTicket = (value: string): Observable<Ticket[]> => this.http.get<Ticket[]>(`http://localhost:4300/api/lookup?symbol=${value}`);
  // http://localhost:4300/api/lookup?symbol
}
