import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MaterialsModule } from './materials/materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleTableComponent } from './people-table/people-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    PeopleTableComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
