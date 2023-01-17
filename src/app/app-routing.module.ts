import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteListsComponent } from './pages/note-lists/note-lists.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:MainLayoutComponent,
  children:[
    {path: '', component: NoteListsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
