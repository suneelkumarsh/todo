import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListsComponent } from './note-lists.component';

describe('NoteListsComponent', () => {
  let component: NoteListsComponent;
  let fixture: ComponentFixture<NoteListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
