import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
