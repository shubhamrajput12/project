import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  ct(data:any){
    console.log(data);
    this.http.post('http://localhost:4002/add',data).subscribe((res)=>{
    console.log(res);
    this.ngOnInit()
   })
   this.router.navigate(['/'])
  }
  
  
}