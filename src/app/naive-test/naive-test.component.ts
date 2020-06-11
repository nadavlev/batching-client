import {DataService} from './../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimingObject} from '../timing-object';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CostumeFetchService} from '../costume-fetch.service';

@Component({
  selector: 'app-naive-test',
  templateUrl: './naive-test.component.html',
  styleUrls: ['./naive-test.component.scss']
})
export class NaiveTestComponent implements OnInit, OnDestroy{

  public displayedColumns: string[] = [];
  public dataSource: any = [];
  public timingObject: TimingObject = new TimingObject();
  public fetchQuantity: number;
  private timingObjectEvents: Subscription;
  private isLoading: boolean = true;

  constructor(private http: HttpClient,
              private dataService: DataService,
              private route: ActivatedRoute,
              private customFetchService: CostumeFetchService) { }

  ngOnInit() {
    this.timingObject.description = 'Naive';
    this.getTotalNumberOfRecords().then(response => {
      this.fetchQuantity = response.num;
      this.timingObject.setPageStart();

      const quantityFromRout = this.route.snapshot.params['fetchQuantity'];
      this.fetchQuantity = quantityFromRout ? quantityFromRout : this.fetchQuantity;
      this.getData();
    });

    this.timingObjectEvents = this.timingObject.timingObjectSubject.subscribe((obj) => {
      const URL = 'http://localhost:3000/api/timingObject';
      this.customFetchService.postData(URL, obj);
    });
  }

  ngOnDestroy() {
    this.timingObjectEvents.unsubscribe();
  }

  private getData() {
    const url = `http://localhost:3000/api/initial?fetchQuantity=${this.fetchQuantity}`;
    this.http.get(url).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      }
    );
  }

  private async getTotalNumberOfRecords() {
    const response = await fetch('http://localhost:3000/api/getTotalNumberOfRecords');
    return await response.json();
  }


  private handleResponse(res) {
    this.timingObject.setDatarecieved();
    const receivedData = this.dataService.tableDataSourceFromResponse(res?.data);
    this.timingObject.totalRecords = res.actualFetchQuantity;
    this.timingObject.setDataRendered();

    this.dataSource = receivedData;
    this.displayedColumns = Object.keys(receivedData[0]);

    setTimeout(() => {
      this.timingObject.setDataDisplayEnded();
      this.isLoading = false;
    }, 0);
  }

  private handleError(err) {
    console.error(err);
  }

  private getCurrentTime() {
    return (new Date()).getTime();
  }

}
