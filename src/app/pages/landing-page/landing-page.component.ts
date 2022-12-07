import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LinkShorteningModel} from "../../model/link-shortening.model";
import {ShortenLinkService} from "../../services/shorten-link.service";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  submitted = false;
  shortenUrl = new FormGroup({});
  shortLinks: LinkShorteningModel[] = [];
  subscriptions: Subscription[] = [];

  constructor(private shortenLinkService: ShortenLinkService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.shortenUrl = new FormGroup({
      url: new FormControl('', Validators.required),
    });
  }

  get shortenForm(): { [key: string]: AbstractControl } {
    return this.shortenUrl.controls;
  }

  createShorterLink() {
    const subscription = this.shortenLinkService.createShortLink(this.shortenUrl.value.url)
      .subscribe( (res: LinkShorteningModel) => {
        this.localStorageService.setSettings(this.shortLinks.push(res));
        // this.shortLinks.push(res);
        // localStorage.setItem('shortLinks', JSON.stringify(this.shortLinks));
        this.shortenUrl.reset();
      })
    this.subscriptions.push(subscription);
  }

}
