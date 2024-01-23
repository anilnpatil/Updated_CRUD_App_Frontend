import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpProviderService } from '../service/http-provider.service';

let _this: AddTableFormComponent
@Component({
  selector: 'app-add-table-form',
  templateUrl: './add-table-form.component.html',
  styleUrls: ['./add-table-form.component.scss']
})
export class AddTableFormComponent implements OnInit {
  tableForm: FormGroup = new FormGroup({
    tableName: new FormControl(''),
    columns: new FormArray([])
  });
  isSubmitted: boolean = false;
  dynamicTableCols = (this.tableForm.get('columns') as FormArray).controls
  formData: any;   

  constructor(private fb: FormBuilder, config: NgbDropdownConfig, private http: HttpClient,private httpProviderService: HttpProviderService ) {
    (this.tableForm.get('columns') as FormArray).controls;
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
  }
  addNewTable(isValid: boolean) {
    if (isValid) {
      alert('hey!')
    }
  }
  addNewField() {
    const control = this.fb.group({
      name: ['', Validators.required],
      dataType: ['', Validators.required],
      length: ['', Validators.required],
      primarykey: ['', Validators.required],
    });
    (this.tableForm.get('columns') as FormArray).push(control);
  }
  removeField(index: number) {
    (this.tableForm.get('columns') as FormArray).removeAt(index);
  }
  // submitForm() {
  //   this.formData = this.tableForm.value;
  //   console.log(this.formData.value)
  //   this.httpProviderService.createTable(this.formData)
  // }

  submitForm() {
    this.formData = this.tableForm.value;

    // Call the appropriate method from HttpProviderService
    this.httpProviderService.createTable(this.formData).subscribe({
      
    }
     
    );
  }


}
export class createTableForm {
  tableName: string = "";
}