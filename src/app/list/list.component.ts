import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient, public contact:ContactService) { }
  data_rec:any="";
  list:any
  ngOnInit(): void {
    this.contact.getcontact().subscribe((data)=>{
      this.list=data
    })
  }

  deletecnt(id:any){
    console.log(id);
    this.contact.deletecontact(id).subscribe((data)=>{
      console.log("contact deleted");
      this.ngOnInit()
    })

  }
  
}



