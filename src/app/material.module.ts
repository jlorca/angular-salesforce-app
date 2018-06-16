import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ 
    MatSidenavModule,
    BrowserAnimationsModule 
  ],
  exports: [ MatSidenavModule ],
})
export class MaterialModule {
}