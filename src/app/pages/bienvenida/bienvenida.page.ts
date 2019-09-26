import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  trustedVideoUrl: SafeResourceUrl;
 vid_link:"https://player.vimeo.com/video/336680837";
  constructor(public navCtrl: NavController,
    private domSanitizer: DomSanitizer
    ) { 

  }

  ngOnInit() {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.vid_link);
    
  }



}
