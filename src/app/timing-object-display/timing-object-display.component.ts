import {Component, Input, OnInit} from '@angular/core';
import {TIMING_UNITES, TimingObject} from '../timing-object';

@Component({
  selector: 'app-timing-object-display',
  templateUrl: './timing-object-display.component.html',
  styleUrls: ['./timing-object-display.component.scss']
})
export class TimingObjectDisplayComponent implements OnInit {
  @Input() timingObject: TimingObject;
  public timingUnites: string;
  constructor() {
    this.timingUnites = TIMING_UNITES;
  }

  ngOnInit(): void {
    console.log(this.timingObject);
  }

}
