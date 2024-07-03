import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkShorteningModel} from "../model/link-shortening.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShortenLinkService {
  private apiUrl = 'http://tinyurl.com/api-create.php';

  constructor(private http: HttpClient,) { }

  createShortLink(longUrl: string): Observable<string> {

    return this.http.get(`${this.apiUrl}?url=${longUrl}`, { responseType: 'text' });

    // return this.http.get<LinkShorteningModel>(
    //   `https://api.shrtco.de/v2/shorten?url=${url}`, {}
    // );
  }

}
