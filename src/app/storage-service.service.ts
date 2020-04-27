import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private storageObject = [];
  private storageSubject = new BehaviorSubject([]);

  constructor() { 
    const obj = JSON.parse(localStorage.getItem('data')) || [];
    this.storageObject = obj;
    this.storageSubject.next(obj.filter(e => !e.parent));
  }

  getAllNotes(){
    return this.storageSubject.asObservable();
  }

  addNote(note){
    note.id = parseInt((Math.random() * 1000).toString());
    this.storageObject.push(note);
    this.updateLocalStorage();
    this.storageSubject.next(this.storageObject.filter(e => !e.parent));
  }

  addChild(note, parent){
    note.id = parseInt((Math.random() * 1000).toString());
    note.parent = parent;
    this.storageObject.push(note);
    this.updateLocalStorage();
    return note;
  }

  getChild(parent){
    return of(this.storageObject.filter(e => e.parent === parent));
  }

  updateLocalStorage(){
    localStorage.setItem('data', JSON.stringify(this.storageObject));
  }
}
