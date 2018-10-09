import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TicketSearchRoutingModule } from './ticket-search-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { TicketSearchService } from './services/ticket-search.service';
import { ticketSearchReducer } from './store/ticket-search.reducers';
import { TicketSearchEffects } from './store/ticket-search.effects';

@NgModule({
  imports: [
    CommonModule,
    TicketSearchRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forFeature('searchTickets', ticketSearchReducer),
    EffectsModule.forFeature([TicketSearchEffects])
  ],
  declarations: [SearchFormComponent],
  providers: [TicketSearchService]
})
export class TicketSearchModule { }
