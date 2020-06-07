import {DataService} from './../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {TimingObject} from '../timing-object';

@Component({
  selector: 'app-naive-test',
  templateUrl: './naive-test.component.html',
  styleUrls: ['./naive-test.component.scss']
})
export class NaiveTestComponent implements OnInit {

  public displayedColumns: string[] = [];
  public dataSource: any = [];
  public timingObject: TimingObject = new TimingObject();

  constructor(private http: HttpClient,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.timingObject.setPageStart();
    this.getData();
  }

  private getData() {
    const url = 'http://localhost:3000/api/initial';
    this.http.get(url).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      }
    );
  }

  private handleResponse(res) {
    this.timingObject.setDatarecieved();
    const receivedData = this.dataService.tableDataSourceFromResponse(res?.data);
    this.timingObject.setDataRendered();

    this.dataSource = receivedData;
    this.displayedColumns = Object.keys(receivedData[0]);

    setTimeout(() => {
      this.timingObject.setDataDisplayEnded();
    }, 0);
  }

  private handleError(err) {
    console.error(err);
  }

  private getCurrentTime() {
    return (new Date()).getTime();;
  }

}
