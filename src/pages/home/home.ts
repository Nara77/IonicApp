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

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
    //this.goToOtherPage()
  } 
   
   sayText() {
         this.tts.speak(this.text)
         .then(() => console.log("Success" + this.text))
          .catch((reason: any) => console.log(reason));
        
        
       }
  // ionViewDidLoad() {
  //   console.log("Run")
  //   this.goToOtherPage()

  }



      // goToOtherPage() {
       // push another page onto the history stack
        //causing the nav controller to animate the new page in
        //this.navCtrl.push(LoginPage);
      // }
      
      //}
 
 



