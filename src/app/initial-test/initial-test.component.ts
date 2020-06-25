import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    private http: HttpClient,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

  }

  public onSubmitGenerationRequest() {

  }

  public getData(save: boolean = false) {
    const url = 'http://localhost:3000/api/generate/' + this.generationQuantity + '/' + save;
    this.http.get(url).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    }
  );
  }

  private handleResponse(res) {
    this.dataSource = this.dataService.tableDataSourceFromResponse(res);
    this.displayedColumns = this.dataService.getMyUserHeaders();
  }

  private handleError(err) {
    console.error(err);
  }


}
