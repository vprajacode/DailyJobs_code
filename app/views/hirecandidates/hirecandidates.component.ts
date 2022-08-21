import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { RegisterService } from'../../shared/service/register.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hirecandidates',
  templateUrl: './hirecandidates.component.html',
  styleUrls: ['./hirecandidates.component.scss']
})
export class HirecandidatesComponent implements OnInit {
  public gridData: any[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData()
  {
      this.service.displayapprovedresume().subscribe(data=>{
        this.gridData=data;
        console.log(data);
      });
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
  add(dataitem)
  {  
    //console.log(dataitem);
    
    var val1 = dataitem;
    //var x = "32";
    var val: number = +val1;
    
    console.log(val);
    this.service.getpdf(val).subscribe(data=>{
    
      
         debugger;
        //var val = (data) 
        console.log(data);
         //const blob= new Blob([data],{type:'application/pdf'});
         const url =window.URL.createObjectURL(data);

     
       window.open(url,'_blank');

      
  })
  }
}
