import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContentComponent } from './mycontent/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyContentComponent],
  exports: [MyContentComponent]
})
export class MyContentModule {
  static forRoot() {
    return {
      ngModule: MyContentModule
    }
  }

}
