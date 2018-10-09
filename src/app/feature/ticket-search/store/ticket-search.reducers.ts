import { TicketSearchState, Ticket } from '@app/models';
import { TicketSearchActions, TicketSearchActionTypes } from './ticket-search.actions';

export const initialState: TicketSearchState = {
  ticketVal: null,
  tickets: null,
  httpError: null
};

export const selectorTickets = state => state.searchTickets.tickets;

export function ticketSearchReducer(state: TicketSearchState = initialState, action: TicketSearchActions) {
  switch (action.type) {
    case TicketSearchActionTypes.TICKET_SEARCH_VALUE_CHANGED:
      if (!action.payload || action.payload.trim().length === 0) {
        return {
          ...state,
          ticketVal: null,
          tickets: null,
          httpError: null
        };
      }

      return state;

    case TicketSearchActionTypes.TICKET_SEARCH_SUCCESS:
      return {
        ...state,
        tickets: action.payload.tickets && action.payload.tickets.length !== 0 ? action.payload.tickets : null,
        ticketVal: action.payload.ticketVal
      };

    case TicketSearchActionTypes.TICKET_SEARCH_FAILURE:
      return {
        ...state,
        tickets: null,
        httpError: action.payload.error,
        ticketVal: action.payload.ticketVal
      };

    default:
      return state;
  }
}
