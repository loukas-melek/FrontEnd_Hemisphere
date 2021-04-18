import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OfferTaskSolution } from '../../apps/entities/Offer_Task_Solution';
import { TokenStorageService } from '../../auth/authentication/services/token-storage.service';
import { OfferService } from '../../services/OfferTaskSolutionService';

@Component({
  selector: 'ngx-seekforoffers',
  templateUrl: './seekforoffers.component.html',
  styleUrls: ['./seekforoffers.component.scss']
})
export class SeekforoffersComponent implements OnInit {
  offers=new Array<OfferTaskSolution>();
  token;
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  location=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  constructor(private offerservice:OfferService,private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.listoffers()
  }
  listoffers(){
    this.token=this.tokenStorage.getToken();
    console.log(this.token);
    
    this.offerservice.listOfferTaskSolution(this.token).subscribe(res=>{

      this.offers=res;
      console.log(this.offers);
      let foffer=new Array<OfferTaskSolution>();
      this.offers.forEach(element=>{
        if(element.type==0){
          foffer.push(element);
          console.log(foffer);
        }
      })
      this.offers=foffer;
      console.log(this.offers);
      
    }
     
    )
  }
  
  applyFilter(event: Event) {

    
    let dataSource = new MatTableDataSource(this.offers);
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
    console.log(dataSource)
    console.log(dataSource.filteredData)
    // this.offers=[];
    if(dataSource.filter.length==0){
      this.listoffers();
      console.log(this.offers)
    }else{
    this.offers=dataSource.filteredData
    console.log(this.offers)}
    //dataSource.filteredData.forEach(element=>{this.offers.push(element)})
    
    
  




  }

  getOffer(myObj:any) {
    this.router.navigate(['details' + '/' + myObj['id']]);
    }
    isVide(list:Array<OfferTaskSolution>){
      if(list.length==0){
        return true
      }else return false;
    }
}
