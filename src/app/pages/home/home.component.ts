import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/component/form/form.component';

export interface Data {
  id?: number;
  email?: string;
  civility?: string;
  first_name?: string;
  last_name?: string;
  user_status?: string;
  count_document?: number;
  company?: Company
}

export interface Company {
  name?: string;
  user_type?: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data: Data
  dataSource: any
  displayedColumns: string[] = ['name', 'type', 'entity', 'status', 'action'];

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog
  ) {
    this.getData()
  }

  ngOnInit(): void {
  }

  getData(): void {
    this.httpClient.get('/assets/mentor.json')
    .subscribe(result => {
      this.dataSource = result;
    })
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource = this.dataSource.concat([result])
    });
  }

}
