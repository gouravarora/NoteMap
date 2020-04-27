import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from './storage-service.service';
import { Note } from './models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  allNotes: Note[];
  noteText;

  constructor(private readonly storageService: StorageServiceService){

  }
  
  private submit = () => {
    if( this.noteText ){
      this.storageService.addNote({
        text: this.noteText
      });
      this.noteText = '';
    }
  }

  ngOnInit(){
    this.storageService.getAllNotes()
    .subscribe((data: Note[]) => {
      console.log('Here');
      this.allNotes = data;
    })
  }
}
