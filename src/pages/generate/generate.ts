import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';

@Component({
  selector:'page-concert-card',
  templateUrl: 'generate.html'
})
export class GeneratePage {
  qrData = null;
  generatedCode = null;

  // Hardcoded for showing example
  eventName = "The Weeknd - Starboy Tour 2018";
  eventLocation = "Globen - Stockholm, Sweden";
  eventDate = "2017-11-24";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private cardIO: CardIO) {

  }

  ionViewDidLoad() {
    console.log('Ticket payment initialized');
  }

  card = {
    cardType: '',
    cardNumber: '',
    redactedCardNumber: '',
    expiryMonth: null,
    expiryYear: null,
    cvv: '',
    postalCode: ''
  };

  confirmAlert() {
    if (this.qrData != null) {
      let confirm = this.alertCtrl.create({
        title: 'Confirm payment?',
        message: 'Do you confirm to purchase this ticket?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Ticket purchase canceled.');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.generateCode();
              console.log('Confirmed ticket purchase.');
            }
          }
        ]
      });
      confirm.present();
    }

  }

  generateCode() {
    this.generatedCode = this.qrData + ' ' + 'Event: ' + this.eventName + ' at ' + this.eventLocation + ' ' + this.eventDate;
  }

  scanCard() {
    this.cardIO.canScan()
      .then(
      (res: boolean) => {
        if (res) {
          let options = {
            scanExpiry: true,
            hideCardIOLogo: true,
            scanInstructions: 'Please position your card according to the frame',
            keepApplicationTheme: true,
            requireCCV: true,
            requireExpiry: true,
            requirePostalCode: false
          };
          this.cardIO.scan(options).then(response => {
            console.log('Scan complete');

            let { cardType, cardNumber, redactedCardNumber,
                    expiryMonth, expiryYear, cvv, postalCode } = response;

            this.card = {
              cardType,
              cardNumber,
              redactedCardNumber,
              expiryMonth,
              expiryYear,
              cvv,
              postalCode
            };
          });
        }
      });
  }

}
