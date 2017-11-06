import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { AboutPage } from '../pages/about/about';
import { SocialPage } from '../pages/social/social';

// SOURCES USED IN PROJECT
// 'https://ionicframework.com/docs/'
// 'https://www.card.io/'
// 'https://ionicframework.com/docs/native/barcode-scanner/'
// 'https://ionicframework.com/docs/native/camera/'
// 'https://ionicframework.com/docs/ionicons/'
// 'https://github.com/yannbf/ionic3-components'

// TO USE EVENTITY, DO NPM INSTALL AND THEN INSTALL
// $ npm install --save @ionic-native/camera

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // The menu list choices
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Social', component: SocialPage },
      { title: 'Tickets', component: ScanPage },
      { title: 'About', component: AboutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
