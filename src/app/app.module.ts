import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectTreeRendererComponent } from './components/object-tree-renderer/object-tree-renderer.component';
import { FormsModule } from '@angular/forms';
import { ToStringPipe } from './pipes/to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTreeRendererComponent,
    ToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
