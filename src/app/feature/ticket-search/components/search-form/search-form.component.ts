import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket, TicketSearchState } from '@app/models';
import { Store } from '@ngrx/store';
import { selectorTickets } from '../../store/ticket-search.reducers';
import { Subscription } from 'rxjs';
import { ActionTicketSearchValueChanged } from '../../store/ticket-search.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  ticketsSub: Subscription;

  tickets: Ticket[];

  constructor(private ticketSearchStore: Store<TicketSearchState>) {}

  ngOnInit() {
    this.ticketsSub = this.ticketSearchStore.select(selectorTickets).subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  onTicketValueChanged(value: string): void {
    this.ticketSearchStore.dispatch(new ActionTicketSearchValueChanged(value));
  }

  ngOnDestroy() {
    this.ticketsSub.unsubscribe();
  }
}
