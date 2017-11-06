import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-quotes',
  templateUrl: 'social.html'
})
export class SocialPage {

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  image: string;
  pictureCreated = false;
  createOwn = false;
  ownQuote: string;
  ownName: string;
  ownPosition: string;

  artistQuotes = [
    {
      imageUrl: 'assets/imgs/frankoceanquote.png',
      quote: 'When you’re happy, you enjoy the music but when you’re sad, you understand the lyrics.',
      name: 'Frank Ocean',
      position: 'Artist'
    },
    {
      imageUrl: 'assets/imgs/frankoceanquote2.png',
      quote: 'I could dream all night, I could drive all night, dreaming.',
      name: 'Frank Ocean',
      position: 'Artist'
    },
    {
      imageUrl: 'assets/imgs/kanyewestquote.png',
      quote: 'I refuse to accept other people\s ideas of happiness for me. As if there\'s a \'one size fits all\' standard for happiness.',
      name: 'Kanye West',
      position: 'Artist'
    },
    {
      imageUrl: 'assets/imgs/theweekndquote.jpg',
      quote: 'Don’t you fall in love, don’t make me make you fall in love. Nobody needs to fall in love.',
      name: 'The Weeknd',
      position: 'Artist'
    }
  ];

  async useCamera(): Promise<any> {
    this.pictureCreated = true;
    this.createOwn = true;
    let options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 3000,
      targetWidth: 500,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options)
      .then((imageData) => {
        this.image = "data:image/jpeg;base64," + imageData;

        let cameraSourceSelector = document.getElementById('cameraId');
        cameraSourceSelector.setAttribute('src', this.image);

      })
      .catch(error => {
        console.log(error);
      })

  }
}
