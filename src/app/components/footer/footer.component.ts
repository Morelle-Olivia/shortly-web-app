import { Component, OnInit } from '@angular/core';
import {ShortenLinkService} from "../../services/shorten-link.service";
import {LinkShorteningModel} from "../../model/link-shortening.model";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  submitted = false;
  shortenUrl = new FormGroup({});
  shortLinks: LinkShorteningModel[] = [
    // {
    //   ok: true,
    //   result: {
    //     short_link2: '',
    //     short_link: '',
    //     original_link: '',
    //     code: '',
    //     full_share_link: '',
    //     full_short_link: '',
    //     full_short_link2: '',
    //     share_link: '',
    //   }
    // }
  ];

  constructor(private shortenLinkService: ShortenLinkService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // this.createShorterLink();
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
        // localStorage.setItem(this.shortLinks.push(res));
        this.localStorageService.setSettings(this.shortLinks.push(res));
        this.shortenUrl.reset();
      })
  }

}
