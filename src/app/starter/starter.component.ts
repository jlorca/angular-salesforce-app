import { Component, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit{
    ngAfterViewInit(){}    

    playPause() {
      let myVideo = <HTMLVideoElement> document.getElementById("video1");
      if (myVideo.paused) 
          myVideo.play(); 
      else 
          myVideo.pause(); 
    }
}
