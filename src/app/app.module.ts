import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { conbinedReducers } from '@app/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(conbinedReducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
