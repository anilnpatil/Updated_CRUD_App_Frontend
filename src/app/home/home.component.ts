import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

export const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  databaseList: any = [
    {
      id: 1,
      name: 'temp db'
    },
    {
      id: 2,
      name: 'second db'
    }
  ];
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private httpProvider: HttpProviderService,
    private webApiService: WebApiService) { }
  reload() {
    this.getAlldatabase();
  }
  ngOnInit(): void {
    this.getAlldatabase();
  }

  async getAlldatabase() {
    this.webApiService.get('api/showdbs').subscribe({
      next: (data) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.databaseList = resultData;
          }
        }
      },
    })
  }

  AddDatabase() {
    this.router.navigate(['Adddatabase']);
  }

  deletedatabaseConfirmation(database: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        // console.log(database)
        this.deletedatabase(database.name);
      },
        (reason) => { });
  }

  deletedatabase(database: any) {
    console.log(database)
    this.httpProvider.dropDatabaseByName(database).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null && resultData.isSuccess) {
          this.toastr.success(resultData.message);
          
          this.getAlldatabase();
          
        }
        
      }
    },
      (error: any) => { });
  }
}
