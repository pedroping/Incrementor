import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { IconHarnessExample } from './incrementor/icon-harness-example';
import { ShowIncrementorComponent } from './show-incrementor/show-incrementor.component';
import { MainRoutingModule } from './main/main.routing.module';

@NgModule({
  declarations: [IconHarnessExample, MainComponent, MainComponent, ShowIncrementorComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MainRoutingModule
  ],
  bootstrap: [MainComponent],
})
export class AppModule {}
