import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../models/Note';
import { StorageServiceService } from '../storage-service.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  @Input() data: Note;

  subNotes = [];

  constructor(private readonly storageServic: StorageServiceService) { }

  noteAdded(event){
    const note = this.storageServic.addChild({
      text: event.text
    }, this.data.id);
    this.subNotes.push(note);
  }

  ngOnInit() {
    this.storageServic.getChild(this.data.id)
    .subscribe((data) => {
      this.subNotes = data;
    })
  }

}
