import {Component, Input, OnInit} from '@angular/core';
import {LinkShorteningModel} from "../../model/link-shortening.model";

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {
  isCopied = false;
  @Input()
  link!: LinkShorteningModel;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isCopied = true;
  }

}
