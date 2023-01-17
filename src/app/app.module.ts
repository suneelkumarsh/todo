import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListsComponent } from './pages/note-lists/note-lists.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteslistComponent } from './noteslist/noteslist.component';



@NgModule({
  declarations: [
    AppComponent,
    NoteListsComponent,
    MainLayoutComponent,
    NoteslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
