import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url="http://localhost:4002/"
  constructor( private http: HttpClient) { }

  getcontact()
{
  return this.http.get(this.url)
}

deletecontact(id:any){
  return this.http.delete("http://localhost:4002/deletecontact/"+id).pipe((response)=>{
    return response;
  })
}

}




