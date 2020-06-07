import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalNumberOfRecords: number = 0;
  private currentRout: string;

  constructor(private router: Router,
              private http: HttpClient) {

    this.router.events.subscribe(this.routerEvent);

  }

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

  private routerEvent(e: RouterEvent) {
      if (e instanceof NavigationEnd ) {
        this.currentRout = e.url.slice(1);
        console.log(`current route ${this.currentRout}`);
      }

  }

}
