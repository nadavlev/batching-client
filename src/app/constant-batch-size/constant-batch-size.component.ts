import { Component, OnInit } from '@angular/core';
import {TimingObject} from '../timing-object';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {CostumeFetchService} from '../costume-fetch.service';
import {MyUserDocument} from '../../../../batching_server/src/models/MyUser';
import * as _ from 'lodash';

@Component({
  selector: 'app-constant-batch-size',
  templateUrl: './constant-batch-size.component.html',
  styleUrls: ['./constant-batch-size.component.scss']
})
export class ConstantBatchSizeComponent implements OnInit {
  public displayedColumns: any[] = [];
  public dataSource: any = [];
  public timingObject: TimingObject = new TimingObject();
  public totalNumberOfRecordsInDB: number;
  private timingObjectEvents: Subscription;
  public isLoading = true;
  public batchSize = 5000;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private customFetchService: CostumeFetchService) { }

  ngOnInit(): void {
    this.batchSize = this.route.snapshot.params['batchSize'] ? this.route.snapshot.params['batchSize'] : this.batchSize;
    this.dataService.getTotalNumberOfRecords().then(response => {
      this.totalNumberOfRecordsInDB = response.num;
      this.timingObject.description = `Constant batch size : ${this.batchSize} Total records: ${this.totalNumberOfRecordsInDB} Render when all data received`;
      this.timingObject.setPageStart();
      this.getData(this.batchSize);

      this.timingObjectEvents = this.timingObject.timingObjectSubject.subscribe((obj) => {
        const URL = 'http://localhost:3000/api/timingObject';
        this.customFetchService.postData(URL, obj);
      });
    });
  }

  private getData(batchSize: number, currentId ?: string) {
    let timeoutHandler;
    const url = `http://localhost:3000/api/constantBatchSize?batchSize=${batchSize}&currentId=${currentId ? currentId : ''}`;
    this.customFetchService.getData(url).then(response => {
      const isLastBatch: boolean = (!!response?.length && response.length < batchSize) ||
                                    this.dataSource.length === this.totalNumberOfRecordsInDB;
      this.dataSource = [...this.dataSource, ...this.dataService.tableDataSourceFromResponse(response)];
      this.displayedColumns = this.dataService.getAGColumnDefinitions();
      if (!isLastBatch) {
        const lastId = response[response.length - 1]._id;
        this.getData(batchSize, lastId);
      } else {
        this.timingObject.setDatarecieved();
        this.timingObject.totalRecords = this.dataSource.length;
        this.timingObject.setDataRendered();

        if (!timeoutHandler) {
          timeoutHandler = setTimeout(() => {
            this.timingObject.setDataDisplayEnded();
            this.isLoading = false;
          });
        }
      }
    }, err => {
      console.error(err);
    });
  }
}
