import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MODALS } from '../home/home.component';

@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.component.html',
  styleUrls: ['./database-view.component.scss']
})
export class DatabaseViewComponent implements OnInit {

  databaseName: any;
  databaseDetail: any = [];
  tableList: any[] = [];


  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider: HttpProviderService, private modalService: NgbModal) { }

  reload() {
    this.getdatabaseDetailByName();
  }

  ngOnInit(): void {
    this.databaseName = this.route.snapshot.queryParams['database'];
    this.getdatabaseDetailByName();
  }

  async getdatabaseDetailByName() {
    this.webApiService.get('api/database/' +this.databaseName).subscribe(data => {
      if (data !== undefined)
      {
        console.log(this.databaseName)
console.log(data.body)
      }
      
      this.tableList = data.body as any[];
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
