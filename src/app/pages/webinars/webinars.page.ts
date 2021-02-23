import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebinarsService } from 'src/app/services/webinars.service';
import { InterfaceWebinar, IWebinar } from 'src/app/interfaces/webinars';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.page.html',
  styleUrls: ['./webinars.page.scss'],
})
export class WebinarsPage implements OnInit {

  webinars: IWebinar[];
  constructor(private iab: InAppBrowser,
    private webinar:WebinarsService) {
     
this.cargarWebinars();
     }

  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}
async cargarWebinars(){
  this.webinars= await this.webinar.cargar_todos();
}
  ngOnInit() {
  }

}
