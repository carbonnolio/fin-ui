import { TicketSearchModule } from './ticket-search.module';

describe('TicketSearchModule', () => {
  let ticketSearchModule: TicketSearchModule;

  beforeEach(() => {
    ticketSearchModule = new TicketSearchModule();
  });

  it('should create an instance', () => {
    expect(ticketSearchModule).toBeTruthy();
  });
});
