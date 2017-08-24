import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';
import { EditForSaleComponent } from './edit-for-sale/edit-for-sale.component';
import { AgePipePipe } from './age-pipe.pipe';
import { PricePipePipe } from './price-pipe.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    AboutComponent,
    PersonalDetailComponent,
    EditPersonalComponent,
    ForSaleComponent,
    ForSaleDetailComponent,
    EditForSaleComponent,
    AgePipePipe,
    PricePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
