import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ 
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [ 
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule
   ]
})
export class MaterialModule {
}