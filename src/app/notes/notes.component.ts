import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() note: Note;
  @Output() noteAdded = new EventEmitter();

  createNote = false;
  noteText: string;

  constructor() { }

  ngOnInit() {
  }

  addNote(){
    if(this.noteText){
      this.noteAdded.emit({text: this.noteText});
      this.noteText = '';
      this.createNote = false;
    }
  }

  createNewNote(){
    this.createNote = true;
  }

}
