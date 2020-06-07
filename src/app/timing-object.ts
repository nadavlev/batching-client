const TIMING_UNITES = 'Milis';
export class TimingObject {

  private pageStart = 0;
  private dataReceived = 0;
  private dataRendered = 0;
  private dataDisplayEnded = 0;

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
  }

  public get dataLoadTime() {
    return `Api Get Data ${this.dataReceived - this.pageStart} ${TIMING_UNITES}`;
  }

  public get dataRenderingTime() {
    return `Data Rendering ${this.dataRendered - this.dataReceived} ${TIMING_UNITES}`;
  }

  public get displayTime() {
    return `Display Rendering ${this.dataDisplayEnded - this.dataRendered} ${TIMING_UNITES}`;
  }
  public get totalTime() {
    return `Total Loading Time ${this.dataDisplayEnded - this.pageStart} ${TIMING_UNITES}`;
  }

  public isLoading() {
    return !this.dataDisplayEnded;
  }

  private getTimeMilis() {
    return (new Date()).getTime();
  }

}
