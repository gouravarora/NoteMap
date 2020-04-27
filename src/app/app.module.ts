import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NotesComponent } from './notes/notes.component';

import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
