import {CostumeFetchService} from './costume-fetch.service';
import {Observable, Observer} from 'rxjs';

export class Timing {
  _totalRecords = 0;
  _dataLoadTime: number;
  _dataRenderTime: number;
  _displayTime: number;
  _totalTime: number;
  _description: string;
  _timePerRecord: number;
}

export const TIMING_UNITES = 'Milis';
export class TimingObject {

  constructor() {}

  private pageStart = 0;
  private dataReceived = 0;
  private dataRendered = 0;
  private dataDisplayEnded = 0;
  private timing: Timing = new Timing();
  private observer: Observer<Timing>;
  public timingObjectSubject: Observable<Timing> = new Observable<Timing>(observer => {
    this.observer = observer;
  });

  public setPageStart() {
    this.pageStart = this.getTimeMilis();
  }

  public setDatarecieved() {
    this.dataReceived = this.getTimeMilis();
  }

  public setDataRendered() {
    this.dataRendered = this.getTimeMilis();
  }

  public setDataDisplayEnded() {
    this.dataDisplayEnded = this.getTimeMilis();
    this.calculate();
  }

  public set totalRecords(numberOfRecords: number) {
    this.timing._totalRecords = numberOfRecords;
  }

  public get totalRecords() {
    return this.timing._totalRecords;
  }

  public set description(desc: string) {
    this.timing._description = desc;
  }

  public get description() {
    return this.timing._description;
  }

  public calculate() {
    this.timing._dataLoadTime = this.dataReceived - this.pageStart;
    this.timing._dataRenderTime = this.dataRendered - this.dataReceived;
    this.timing._displayTime = this.dataDisplayEnded - this.dataRendered;
    this.timing._totalTime = this.dataDisplayEnded - this.pageStart;
    this.timing._timePerRecord = this.timing._totalRecords > 0 ? this.timing._totalTime / this.timing._totalRecords : 0;
    this.observer.next(this.timing);
  }

  public get dataLoadTime(): number {
    return this.timing._dataLoadTime;
  }

  public get dataRenderingTime() {
    return this.timing._dataRenderTime;
  }

  public get displayTime() {
    return this.timing._displayTime;
  }
  public get totalTime() {
    const timePerRecord = this.timing._totalRecords ?
      this.timing._totalTime / this.timing._totalRecords :
      'Calculating';
    return `Total Loading Time ${this.timing._totalTime} ${TIMING_UNITES} : ${timePerRecord} Per Record`;
  }

  public isLoading() {
    return !this.dataDisplayEnded;
  }

  private getTimeMilis() {
    return (new Date()).getTime();
  }

}
