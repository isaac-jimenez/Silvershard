// Angular.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd Party.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Our Stuff.
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
