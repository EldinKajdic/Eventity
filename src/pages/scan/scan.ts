import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector:'page-artist-display',
  templateUrl: 'scan.html'
})
export class ScanPage {
  scannedCode = null;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  async scanCode() {
    try {
      await this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
      })
    }
    catch (e) {
      console.log(e);
    }
  }
}
