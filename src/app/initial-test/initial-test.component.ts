import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as _ from "lodash";
import { FormControl } from '@angular/forms';

interface ResposeObject {
  data: any;
}

@Component({
  selector: 'app-initial-test',
  templateUrl: './initial-test.component.html',
  styleUrls: ['./initial-test.component.scss']
})
export class InitialTestComponent implements OnInit {

  public displayedColumns: string[] = [];
  public dataSource: any = [];
  public generationQuantity: number;
  public replaceAddValues: string[] = ['replace', 'add'];
  public replaceAdd: FormControl;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  public onSubmitGenerationRequest() {

  }

  public getData(save: boolean = false) {
    let url = 'http://localhost:3000/api/generate/' + this.generationQuantity + '/' + save;
    this.http.get(url).subscribe((res: ResposeObject) => {

      if (res?.data?.length) {
        this.dataSource = res.data.map( row => {
          return {
            ...row,
            name: row.profile.name,
            gender: row.profile.gender,
            location: row.profile.location,
            website: row.profile.website,
            picture: row.profile.picture
          };
        });
        this.displayedColumns = Object.keys(this.dataSource[0]);

      }
    }, err => {
      console.error(err);
    });
  }



}
