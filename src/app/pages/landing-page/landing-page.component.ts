import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LinkShorteningModel} from "../../model/link-shortening.model";
import {ShortenLinkService} from "../../services/shorten-link.service";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  submitted = false;
  loader = false;
  shortenUrl = new FormGroup({});
  shortLinks: LinkShorteningModel[] = [];
  subscriptions: Subscription[] = [];

  constructor(private shortenLinkService: ShortenLinkService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.shortLinks = this.localStorageService.getLinks();
    this.shortenUrl = new FormGroup({
      url: new FormControl('', Validators.required),
    });
  }

  get shortenForm(): { [key: string]: AbstractControl } {
    return this.shortenUrl.controls;
  }

  createShorterLink() {
    this.loader = true;
    console.log(this.shortenUrl.value.url)
    const subscription = this.shortenLinkService.createShortLink(this.shortenUrl.value.url)
      .subscribe( (res) => {
        // this.shortLinks.push(res);
        console.log(res)
        // this.loader = false;
        console.log(this.localStorageService.setLinks(this.shortLinks));
        this.shortenUrl.reset();
      }, (error: HttpErrorResponse) => {}).add(() => this.loader = false);
    // this.subscriptions.push(subscription);
  }

}
