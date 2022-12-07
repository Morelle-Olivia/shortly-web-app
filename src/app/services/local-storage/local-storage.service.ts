import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageName: string = "Settings";

  constructor() { }

  setLinks(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getLinks() {
    let data = localStorage.getItem(this.storageName) || '[]';
    return JSON.parse(data);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}
