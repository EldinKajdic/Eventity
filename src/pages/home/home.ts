import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {GeneratePage} from '../generate/generate';

@Component({
  selector: 'page-concert-card',
  templateUrl: 'home.html',
})

export class HomePage {
generatePage = GeneratePage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlbumList() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Starboy (Album)');

    alert.addInput({
      type: 'radio',
      label: '1. Starboy (feat Daftpunk) 3:50'
    });
    
    alert.addInput({
      type: 'radio',
      label: '2. Partymonster 4:09'
    });

    alert.addInput({
      type: 'radio',
      label: '3. False Alarm 3:40'
    });

    alert.addInput({
      type: 'radio',
      label: '4. Reminder 3:39'
    });

    alert.addInput({
      type: 'radio',
      label: '5. Rockin 3:53'
    });

    alert.addInput({
      type: 'radio',
      label: '6. Secrets 4:26'
    });

    alert.addInput({
      type: 'radio',
      label: '7. True Colors 3:26'
    });

    alert.addInput({
      type: 'radio',
      label: '8. Stargirl Interlude (feat Lana Del Rey) 3:51'
    });

    alert.addInput({
      type: 'radio',
      label: '9. Sidewalks (feat Kendrick Lamar) 3:51'
    });

    alert.addInput({
      type: 'radio',
      label: '10. Six Feet Under 3:58'
    });

    alert.addButton({
      text: 'OK',
    });
    alert.present();
  }

  concerts = [
    {
      tourName: 'Starboy T O U R Europe 2018',
      artistName: 'The Weeknd',
      artistImage: 'assets/imgs/theweeknd.png',
      color: '#f73e53',
      extra: 'The Starboy Collection',
      extraText: 'Starboy is the third studio album by Canadian singer The Weeknd. It was released on November 25, 2016, by XO and Republic Records. The album features guest appearances from Daft Punk, Lana Del Rey, Future and Kendrick Lamar.',
      location: 'Globen, Stockholm',
      date: 'November 24th 2017',
      information: 'This time, The Weeknd routes to Sweden and visits the capital city Stockholm for the third time this year. Be sure to get your tickets in time!',
      marginRight: 22
    },
    {
      tourName: 'Blonde + Endless',
      artistName: 'Frank Ocean',
      artistImage: 'assets/imgs/frankocean.png',
      color: '#2196F3',
      extra: 'Blonde',
      extraText: "Blonde is the second studio album by American singer Frank Ocean. It was released on August 20, 2016, as a timed exclusive on the iTunes Store and Apple Music, and followed the August 19 release of Ocean's visual album Endless.",
      location: 'Way Out West, Gothenburg',
      date: 'August 10th 2018',
      information: 'The artists anticipated comeback has arrived and this time to the city of Gothenburg. The highly rated artist will be playing his songs on the field of Way Out West. Be there or be square!',
      marginRight: 70
    },
    {
      tourName: 'The Life Of Yeezus',
      artistName: 'Kanye West',
      artistImage: 'assets/imgs/yeezus.png',
      color: '#FF6D00',
      extra: 'The Life Of Pablo',
      extraText: 'The Life of Pablo is the seventh studio album by American rapper Kanye West. The Life of Pablo was preceded by several promotional singles as part of Wests GOOD Fridays giveaways, including the tracks "Real Friends" and "No More Parties in LA".',
      location: 'Malmö Arena, Malmö',
      date: 'December 12th 2018',
      information: 'The man, the king, the legend Kanye West returns to Sweden and is guaranteed to make the whole stadium LIT. Wanna get crazy? Buy your tickets now.'
    },
    {
      tourName: 'Coloring Book Tour',
      artistName: 'Chance the Rapper',
      artistImage: 'assets/imgs/chance.png',
      color: '#009688',
      extra: 'Coloring Book',
      extraText: 'Coloring Book is the third mixtape by American rapper Chance the Rapper. For the album, Chance also collaborated with musicians such as Kanye West, Young Thug, Francis and the Lights, Justin Bieber, Kirk Franklin, and the Chicago Children\'s Choir.',
      location: 'Tele2 Arena, Stockholm',
      date: 'April 26th 2018',
      information: 'This winter, Chance the Rapper travels to the stadium of Malmö to celebrate the release of his new album Coloring Book. Will you be there?',
      marginTop: 20,
      marginLeft: 70,
    },
    {
      tourName: 'American Teen Tour',
      artistName: 'Khalid',
      artistImage: 'assets/imgs/khalido.png',
      color: '#607D8B',
      extra: 'Young, Wild & Free',
      extraText: 'American Teen is the debut studio album by American singer Khalid. The album was supported by the singles "Location", and "Young Dumb & Broke". The lead single from the album, called "Location" was released on August 23, 2016. The song peaked at 16 on the Billboard Hot 100.',
      location: 'Annexet, Stockholm',
      date: 'June 18th 2018',
      information: 'Are you living the American Dream? Well, get your location to Stockholm this spring and become a true american teenager!',
      marginTop: 20,
      marginRight: 40
    },
    {
      tourName: 'Lust for life Tour',
      artistName: 'Lana Del Rey',
      artistImage: 'assets/imgs/lanadelrey.png',
      color: '#CE93D8',
      extra: 'Lust for life',
      extraText: 'Lust for Life is the fifth studio album and fourth major-label record by American singer Lana Del Rey, released on July 21, 2017. The title track, which features Canadian singer The Weeknd, was released on April 19 as the second single. The album also features guest appearances from A$AP Rocky, Stevie Nicks, Sean Lennon, and Playboi Carti.',
      location: 'Ullevi, Gothenburg',
      date: 'December 25th 2017',
      information: 'Get your lust for life by attending Lana Del Rey\'s christmas concert in Gothenburg. Get your ticket now!',
      marginRight: 90
    },
  ];

}
