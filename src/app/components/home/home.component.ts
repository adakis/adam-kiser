import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  videolink = '/assets/videos/home_compressed.mp4';
  private anim: any;
  public lottieConfig: Object;
  constructor() {
    this.lottieConfig = {
      path: '/assets/data.json',
      autoplay: true,
      loop: true
  };
  }
  ngOnInit() {
    (<any>document).querySelector('#background-video').muted = 'muted';
  }
}
