import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MODALS } from '../home/home.component';

@Component({
  selector: 'app-table-content-view',
  templateUrl: './table-content-view.component.html',
  styleUrls: ['./table-content-view.component.scss']
})
export class TableContentViewComponent implements OnInit {

  databaseName: any;
  databaseDetail: any = [];
  tableList: any[] = [];
  columnHeaders: any[] = [];
  result: any[] = [];


  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider: HttpProviderService, private modalService: NgbModal) { }

  reload() {
    this.getTableData();
  }

  ngOnInit(): void {
    this.databaseName = this.route.snapshot.queryParams['table'];
    this.getTableData();
  }

  async getTableData() {
    this.webApiService.get('api/table-data/' +this.databaseName).subscribe(data => {
      if (data !== undefined)
      {
        console.log(this.databaseName)
console.log(data.body)
      }
      
      this.tableList = data.body as any[];
      // var tablecols = this.tableList.shift()/;
      console.log(this.tableList[0])
      // Log the keys of the first item in this.tableList
      // const tableData = Object/.keys(this.tableList[0])
      this.columnHeaders = Object.keys(this.tableList[0]);
      // console.log(this.columnHeaders);
      // this.result = Object.values(this.tableList[0])
      // console.log(this.result)
      // this.tableList.slice(1).forEach(row => {
      //   console.log(Object.keys(row));
      // }
      // );

//       // Assuming you want to log the keys of each row in the tableList
//       this.tableList.slice(1).forEach(row => {
//         console.log(Object.keys(row));
// });
      // console.log(this.tableList.keys(row))
    })
  }
  deleteTableConfirmation(tableId: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        alert(tableId + ' table deleted')
      },
        (reason) => { });
  }

}

