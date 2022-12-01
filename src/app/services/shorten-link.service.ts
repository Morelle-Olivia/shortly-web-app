import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkShorteningModel} from "../model/link-shortening.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShortenLinkService {

  constructor(private http: HttpClient,) { }

  createShortLink(url: string): Observable<LinkShorteningModel> {
    return this.http.get<LinkShorteningModel>(
      `https://api.shrtco.de/v2/shorten?url=${url}`, {}
    );
  }

}
