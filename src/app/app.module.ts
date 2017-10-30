import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { GeneratePage } from '../pages/generate/generate';
import {SocialPage} from '../pages/social/social';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {Camera} from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    GeneratePage,
    SocialPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    GeneratePage,
    SocialPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    Camera,
    CardIO
  ]
})
export class AppModule { }
