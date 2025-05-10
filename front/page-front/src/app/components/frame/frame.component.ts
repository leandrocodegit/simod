import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-frame',
  imports: [],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent implements AfterViewInit {

  @ViewChild('myIframe') iframe!: ElementRef;

  ngAfterViewInit() {
    const iframeDoc = this.iframe.nativeElement.contentWindow.document;
    const header = iframeDoc.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }
  }
}
