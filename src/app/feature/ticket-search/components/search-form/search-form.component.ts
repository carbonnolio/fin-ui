import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket, TicketSearchState } from '@app/models';
import { Store } from '@ngrx/store';
import { selectorTickets, selectorTicketValue } from '../../store/ticket-search.reducers';
import { Subscription } from 'rxjs';
import { ActionTicketSearchValueChanged, ActionTicketSearchValuePicked } from '../../store/ticket-search.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  ticketsSub: Subscription;
  ticketValSub: Subscription;

  tickets: Ticket[];
  ticketVal: string;

  tiles = [{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}];

  constructor(private ticketSearchStore: Store<TicketSearchState>) {}

  ngOnInit() {
    this.ticketsSub = this.ticketSearchStore
    .select(selectorTickets)
    .subscribe(tickets => {
      this.tickets = tickets;
    });

    this.ticketValSub = this.ticketSearchStore
    .select(selectorTicketValue)
    .subscribe(ticketVal => {
      this.ticketVal = ticketVal;
    });
  }

  onTicketValueChanged(value: string): void {
    this.ticketSearchStore.dispatch(new ActionTicketSearchValueChanged(value));
  }

  onSelectionChange(ticket: Ticket) {
    this.ticketSearchStore.dispatch(new ActionTicketSearchValuePicked(ticket.symbol));
  }

  ngOnDestroy() {
    this.ticketsSub.unsubscribe();
  }
}
