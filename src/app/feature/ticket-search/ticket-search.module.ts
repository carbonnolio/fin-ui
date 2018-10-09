import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components';
import { TicketSearchRoutingModule } from './ticket-search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TicketSearchRoutingModule
  ],
  declarations: [SearchFormComponent]
})
export class TicketSearchModule { }
