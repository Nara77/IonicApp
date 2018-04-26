import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OkPage } from './ok';

@NgModule({
  declarations: [
    OkPage,
  ],
  imports: [
    IonicPageModule.forChild(OkPage),
  ],
})
export class OkPageModule {}
