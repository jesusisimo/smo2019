import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-coloquios',
  templateUrl: './coloquios.page.html',
  styleUrls: ['./coloquios.page.scss'],
})
export class ColoquiosPage implements OnInit {

  constructor(private iab: InAppBrowser,) { }

  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}

  ngOnInit() {
  }

}
