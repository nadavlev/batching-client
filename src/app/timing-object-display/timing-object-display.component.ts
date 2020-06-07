import {Component, Input, OnInit} from '@angular/core';
import {TimingObject} from '../timing-object';

@Component({
  selector: 'app-timing-object-display',
  templateUrl: './timing-object-display.component.html',
  styleUrls: ['./timing-object-display.component.scss']
})
export class TimingObjectDisplayComponent implements OnInit {
  @Input() timingObject: TimingObject;
  constructor() { }

  ngOnInit(): void {
    console.log(this.timingObject);
  }

}
