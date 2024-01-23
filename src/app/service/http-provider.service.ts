import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = '';//"http://localhost:8080";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAlldatabase: apiUrl + "/api/database/getAlldatabase",
  dropDatabaseByName: apiUrl + "/api/dropDatabase",
  getdatabaseDetailByName: apiUrl + "/api/database/getdatabaseDetailByName",
  savedatabase: apiUrl + "/api/database/savedatabase",
  createTable: apiUrl + "/api/tables/createTable",
  dropTableByName: apiUrl + "/api/dropTable"
  

}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAlldatabase(): Observable<any> {
    return this.webApiService.get(httpLink.getAlldatabase);
  }

  public dropDatabaseByName(model: any): Observable<any> {
    return this.webApiService.delete(httpLink.dropDatabaseByName + '/' + String(model));
  }

  public getdatabaseDetailByName(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getdatabaseDetailByName + '?databaseId=' + model);
  }

  public savedatabase(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savedatabase, model);
  }
  public dropTableByName(model: { dbName: string; tableName: string }): Observable<any> {
    const url = `${httpLink.dropTableByName}/dbName=${model.dbName}/tableName=${model.tableName}`;
    console.log(url)
    return this.webApiService.delete(url);
  }

  public createTable(model: any): Observable<any> {
    return this.webApiService.post(httpLink.createTable, model);
  }
  
}
