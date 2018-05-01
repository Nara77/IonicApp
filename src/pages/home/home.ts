import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  text:string;
  locale:string = this.locale;
  rate:number = this.rate;

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
   // this.goToOtherPage()
  } 
   
   sayText() {
         this.tts.speak({text:'GoodMorning',
         locale: 'en-US',
         rate:1})
         .then(() => console.log("Success" + this.text))
          .catch((reason: any) => console.log(reason));
        
        
       }
  //  ionViewDidLoad() {
  //   console.log("Run")
  //   this.goToOtherPage()

  // }


  // document;addEventListener('deviceready', function () {
  //   // basic usage
  //   this.tts
  //       .speak('hello, world!').then(function () {
  //           alert('success');
  //       }, function (reason) {
  //           alert(reason);
  //       });

     
    
 
  //     }
    }
