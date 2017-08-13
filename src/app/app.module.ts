import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBx17p57GoqgagclJzBV8PujkcG_MoKxMI",
    authDomain: "labeleco-723a7.firebaseapp.com",
    databaseURL: "https://labeleco-723a7.firebaseio.com",
    projectId: "labeleco-723a7",
    storageBucket: "labeleco-723a7.appspot.com",
    messagingSenderId: "166154079476"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
