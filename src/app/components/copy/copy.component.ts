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

  onClick(val: string) {
    this.isCopied = true;
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
  }

}
