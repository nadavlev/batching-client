import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalNumberOfRecords: number = 0;

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getTotalNumberOfRecords();
  }

  public goToInInitialTest() {
    this.router.navigate(['initial']);
  }

  public goToNaiveTest() {
    this.router.navigate(['naiveTest']);
  }

  private getTotalNumberOfRecords() {
    let url = 'http://localhost:3000/api/getTotalNumberOfRecords';

    this.http.get(url).subscribe((res: Response) => {
      this.totalNumberOfRecords = res['num'];
    });
  }

}
