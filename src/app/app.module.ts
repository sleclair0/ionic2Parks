import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ParkListPage } from '../pages/park-list/park-list';
import { ParkDetailsPage } from '../pages/park-details/park-details';
import { ParkMapPage } from '../pages/park-map/park-map';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkDetailsPage,
    ParkMapPage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkDetailsPage,
    ParkMapPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
