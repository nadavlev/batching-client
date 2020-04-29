import { DataService } from './../data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naive-test',
  templateUrl: './naive-test.component.html',
  styleUrls: ['./naive-test.component.scss']
})
export class NaiveTestComponent implements OnInit {

  public displayedColumns: string[] = [];
  public dataSource: any = [];

  constructor(private http: HttpClient,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.getData()
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
    this.dataSource = this.dataService.tableDataSourceFromResponse(res?.data);
    this.displayedColumns = Object.keys(this.dataSource[0]);
  }

  private handleError(err) {
    console.error(err);
  }

}
