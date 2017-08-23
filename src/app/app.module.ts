import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    AboutComponent,
    PersonalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
