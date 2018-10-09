import { Injectable } from '@angular/core';
import { TicketSearchService } from '../services/ticket-search.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, debounceTime, switchMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { ActionTicketSearchValueChanged,
  TicketSearchActionTypes,
  ActionTicketSearchGetSuccess,
  ActionTicketSearchGetFailure
} from './ticket-search.actions';

@Injectable()
export class TicketSearchEffects {
  constructor(private actions$: Actions<Action>, private ticketSearchService: TicketSearchService, private store$: Store<any>) {}

  @Effect()
  getTickets$ = (): Observable<Action> => this.actions$.pipe(
    ofType<ActionTicketSearchValueChanged>(TicketSearchActionTypes.TICKET_SEARCH_VALUE_CHANGED),
    debounceTime(300),
    withLatestFrom(this.store$),
    map(([source, store]) => ({ currValue: source.payload,  oldTicketVal: store.searchTickets.ticketVal})),
    filter(mergedResults => mergedResults.currValue
      && mergedResults.currValue.trim() !== ''
      && mergedResults.oldTicketVal !== mergedResults.currValue
      ),
    map(mergedResults => mergedResults.currValue),
    switchMap(currValue => this.ticketSearchService.getTicket(currValue).pipe(
      map(result => new ActionTicketSearchGetSuccess({ tickets: result, ticketVal: currValue })),
      catchError(error => of(new ActionTicketSearchGetFailure({ error: error, ticketVal: currValue })))
      )
    )
  )
}
