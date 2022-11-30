import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/dist/types";
import {LinkShorteningModel} from "../model/link-shortening.model";

@Injectable({
  providedIn: 'root'
})
export class ShortenLinkService {

  constructor(private http: HttpClient,) { }

  createShortLink(): Observable<LinkShorteningModel> {
    return this.http.post<LinkShorteningModel>(
      `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`
    );
  }}
