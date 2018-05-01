import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
    
        
  ],
  providers: [
    StatusBar,
     Camera,
     TextToSpeech,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider
  ]
})

export class AppModule {}
