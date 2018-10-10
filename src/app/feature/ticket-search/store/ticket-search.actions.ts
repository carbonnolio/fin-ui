import { Action } from '@ngrx/store';
import { Ticket } from '@app/models';
import { HttpErrorResponse } from '@angular/common/http';

export enum TicketSearchActionTypes {
  TICKET_SEARCH_VALUE_CHANGED = '[Ticket Search] Search value changed',
  TICKET_SEARCH_SUCCESS = '[Ticket Search] Get tickets success',
  TICKET_SEARCH_FAILURE = '[Ticket Search] Get tickets failure',
  TICKET_SEARCH_VALUE_PICKED = '[Ticket Search] Search value picked'
}

export class ActionTicketSearchValueChanged implements Action {
  readonly type = TicketSearchActionTypes.TICKET_SEARCH_VALUE_CHANGED;
  constructor(public payload: string) {}
}

export class ActionTicketSearchGetSuccess implements Action {
  readonly type = TicketSearchActionTypes.TICKET_SEARCH_SUCCESS;
  constructor(public payload: { tickets: Ticket[], ticketVal: string }) {}
}

export class ActionTicketSearchGetFailure implements Action {
  readonly type = TicketSearchActionTypes.TICKET_SEARCH_FAILURE;
  constructor(public payload: { error: HttpErrorResponse, ticketVal: string }) {}
}

export class ActionTicketSearchValuePicked implements Action {
  readonly type = TicketSearchActionTypes.TICKET_SEARCH_VALUE_PICKED;
  constructor(public payload: string) {}
}

export type TicketSearchActions = ActionTicketSearchValueChanged
| ActionTicketSearchGetSuccess
| ActionTicketSearchGetFailure
| ActionTicketSearchValuePicked;
