import { Component, OnInit } from '@angular/core';
import {ShortenLinkService} from "../../services/shorten-link.service";
import {LinkShorteningModel} from "../../model/link-shortening.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // url = '';
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

  constructor(private shortenLinkService: ShortenLinkService) { }

  ngOnInit(): void {
    // this.createShorterLink();
    this.shortenUrl = new FormGroup({
      url: new FormControl('', Validators.required),
    });
  }

  createShorterLink() {
    const subscription = this.shortenLinkService.createShortLink(this.shortenUrl.value.url)
      .subscribe( (res: LinkShorteningModel) => {
        this.shortLinks.push(res);
        this.shortenUrl.reset();
      })
  }

}
