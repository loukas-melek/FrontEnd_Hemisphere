import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { GeneralPost } from "../../../apps/entities/General_Post";
import { GeneralPostService } from "../../../services/generalpostService";
import { OfferService } from "../../../services/OfferTaskSolutionService";


@Component({
  selector: 'ngx-supervisor-offer',
  templateUrl: './supervisor-offer.component.html',
  styleUrls: ['./supervisor-offer.component.scss']
})
export class SupervisorOfferComponent implements OnInit {
  first=true;
  // informatique=new Array<Offer>();
  // finance=new Array<Offer>();
  // management=new Array<Offer>();
  // security =new Array<Offer>();
  // commerce =new Array<Offer>();
  // electrique =new Array<Offer>();
  // chimie =new Array<Offer>();
  // other=new Array<Offer>(); 
  saved=new Array<GeneralPost>(); 
  offers=new Array<GeneralPost>();

  i=0;
  
 
  afficheDate;
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  location=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  constructor(private pubservice:GeneralPostService,private offerservice:OfferService,private router: Router) { }
  
  ngOnInit(): void {
 

  this.listoffers()
  } 
  listoffers(){
    this.pubservice.listPubs().subscribe(res=>{
      let transferList=new Array<GeneralPost>();
      this.offers=res;
      this.offers.forEach(element=>{
        if(element.offertasksolution.type==0){
          transferList.push(element);
        }
      })
      this.offers=transferList;
      this.saved=this.offers;
      console.log(this.offers);
      
    }
     
    )
  }
    
  changeDate(date:Date):String{
    let retour ;
    if(new Date().getMonth()-new Date(date).getMonth()==0){
       
      if(new Date().getDay()-new Date(date).getDay()==0){
  
        if(new Date().getHours()-new Date(date).getHours()==0){
  
          if(new Date().getMinutes()-new Date(date).getMinutes()==0){
  
            retour=new String(new Date().getSeconds()-new Date(date).getSeconds()+ " Secounds Ago")
            console.log("test unitaire1 !!!!");
            console.log(retour);
            
            
            
  
          }else{
            retour=new String(new Date().getMinutes()-new Date(date).getMinutes()+" Minutes Ago")
            console.log("test unitaire2 !!!!");
           console.log(retour);
           
          }
  
        }else{
          console.log("test unitaire3 !!!!");
          retour=new String(new Date().getHours()-new Date(date).getHours()+1+" Hours Ago")
          console.log(retour);
          
        }
  
      }else{
        console.log("test unitaire4!!!!");
        retour=new String(new Date().getDay()-new Date(date).getDay()+" Days Ago")
      console.log(retour);
      
      }
  
    }else{
      console.log("test unitaire5 !!!!");
      retour=new String(new Date().getMonth()-new Date(date).getMonth()+" Months Ago")
      console.log(retour);
      
    }
      console.log("we log here the results");
      
      console.log(retour);
      return retour;
  }
  filtrer(location,type,categorie){
  console.log("we are in the new filtre");
  console.log(this.offers);
  console.log(location);
  console.log(type);
  console.log(categorie);
  this.offers=this.saved
/*
  this.offers.filter(item=>item.type==type)*/
    let   retour=new Array<GeneralPost>();
    if (location == 'All' && type == 'All' && categorie == 'All') {
     this.listoffers();
      
    }

    if (location != 'All' && type == 'All' && categorie == 'All') {
    
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.location==location){
          retour.push(offer);
        }
      })
  
    }
    if (location == 'All' && type != 'All' && categorie == 'All') {
      
      console.log("working on it ...");
      
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.offer_type==type){
          retour.push(offer);
        }
      })
  
    }
    if (location == 'All' && type == 'All' && categorie != 'All') {
   
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.categorie==categorie){
          retour.push(offer);
        }
      })
  
    }
    if (location != 'All' && type != 'All' && categorie == 'All') {
    
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.location==location&&offer.offertasksolution.offer_type==type){
          retour.push(offer);
        }
      })
  
    }
    if (location != 'All' && type == 'All' && categorie != 'All') {
    
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.location==location&&offer.offertasksolution.categorie==categorie){
          retour.push(offer);
        }
      })
  
    }
    if (location == 'All' && type != 'All' && categorie != 'All') {
      
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.offer_type==type&&offer.offertasksolution.categorie==categorie){
          retour.push(offer);
        }
      })
  
    }
    if (location != 'All' && type != 'All' && categorie != 'All') {
     
      this.offers.forEach(offer=>{
        if(offer.offertasksolution.offer_type==type&&offer.offertasksolution.categorie==categorie&&offer.offertasksolution.location==location){
          retour.push(offer);
        }
      })
  
    }
    this.offers=retour;
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
    this.router.navigate(['supervisor/details' + '/' + myObj['id']]);
    }
    isVide(list:Array<GeneralPost>){
      if(list.length==0){
        return true
      }else return false;
    }

}
