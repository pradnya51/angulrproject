import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
const api="http://localhost:5555/register/"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDataById(id){
    return this.httpClient.get(api+id)
  }
  getData(){return this.httpClient.get(api)}
  updateData(id,data){return this.httpClient.put(api+id,data)}
  deleteData(id){return this.httpClient.delete(api+id)}
  saveData(data)
  {
    return this.httpClient.post(api,data)

  }

  constructor(private httpClient:HttpClient) { }

  
}
  