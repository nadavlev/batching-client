import {DataService} from './../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimingObject} from '../timing-object';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CostumeFetchService} from '../costume-fetch.service';
import * as _ from 'lodash';

export enum TABLE_TYPES {
  JSON,
  MAT_TABLE,
  NGX_DATATABLE,
  AG_GRID
}

@Component({
  selector: 'app-naive-test',
  templateUrl: './naive-test.component.html',
  styleUrls: ['./naive-test.component.scss']
})
export class NaiveTestComponent implements OnInit, OnDestroy{

  public matTableDisplayedColumns: string[] = [];
  public ngxTableDisplayHeaders: any[] = [];
  public data: any = [];
  public timingObject: TimingObject = new TimingObject();
  public fetchQuantity: number;
  private timingObjectEvents: Subscription;
  public isLoading = true;
  public tableType: TABLE_TYPES;
  private timeoutObject: any;

  // AG Grid
  public ag_columns: any;
  public ag_data;

  constructor(private http: HttpClient,
              private dataService: DataService,
              private route: ActivatedRoute,
              private customFetchService: CostumeFetchService) { }

  ngOnInit() {
    this.dataService.getTotalNumberOfRecords().then(response => {
      this.fetchQuantity = response.num;
      this.timingObject.setPageStart();

      this.tableType = _.toNumber(this.route.snapshot.params['table_type']) as TABLE_TYPES || TABLE_TYPES.JSON;
      const quantityFromRout = this.route.snapshot.params['fetchQuantity'];
      this.fetchQuantity = quantityFromRout ? quantityFromRout : this.fetchQuantity;
      this.timingObject.description = `Naive, Quantity: ${this.fetchQuantity}, Table Type: ${TABLE_TYPES[this.tableType]}`;
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
    this.customFetchService.getData(url).then(
      this.handleResponse.bind(this),
      this.handleError.bind(this)
    );
  }

  private handleResponse(res) {
    this.timingObject.setDatarecieved();
    const receivedData = [...res];
    this.timingObject.totalRecords = res.length;
    this.timingObject.setDataRendered();

    switch (this.tableType) {
      case TABLE_TYPES.JSON:
        this.data = JSON.stringify(receivedData);

        break;
      case TABLE_TYPES.NGX_DATATABLE:
        this.ngxTableDisplayHeaders = this.dataService.getNgxMyUserHeaders();
        this.data = receivedData;
        break;

      case TABLE_TYPES.AG_GRID:
        this.ag_columns = this.dataService.getAGColumnDefinitions();
        this.data = receivedData;
        break;
      default :
        this.matTableDisplayedColumns = this.dataService.getMyUserHeaders();
        this.data = receivedData;
        break;
    }
    this.timeoutObject = setTimeout(() => {
      this.timingObject.setDataDisplayEnded();
      this.isLoading = false;
    }, 0);

  }

  private handleError(err) {
    console.error(err);
  }

  get tableTypes() {
    return TABLE_TYPES;
  }

}
