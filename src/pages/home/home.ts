import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  text:string;

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
    
  } 
   
   sayText():Promise:any {
         this.tts.speak(this.text)
         .then(() => console.log("Success" + this.text))
          .catch((reason: any) => console.log(reason));
        
        
       }
  
      
  
}
 
 


