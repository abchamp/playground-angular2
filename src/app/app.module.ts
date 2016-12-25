import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Component 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { 
    HeaderComponent,
    SharedModule 
} from './shared';

//routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // for Component 
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [ // for Module
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule // it's Routing 
  ],
  providers: [], // for Serveice
  bootstrap: [AppComponent]
})
export class AppModule { }
