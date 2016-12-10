import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
//import { ParkDetailsPage } from '../pages/park-details/park-details';

import { ParkData } from '../app/providers/park-data';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`, providers: [ ParkData ]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public parkData: ParkData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    parkData.load();
  }
}
