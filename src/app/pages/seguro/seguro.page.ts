import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.page.html',
  styleUrls: ['./seguro.page.scss'],
})
export class SeguroPage implements OnInit {

  constructor(    private iab: InAppBrowser
    ) { }

  ngOnInit() {
  }
  abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}
}
