import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-lists',
  templateUrl: './note-lists.component.html',
  styleUrls: ['./note-lists.component.scss']
})
export class NoteListsComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() {

   }

  ngOnInit(): void {

  }

}
