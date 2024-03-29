import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Competance } from "../../../apps/entities/Competance";
import { GeneralPost } from "../../../apps/entities/General_Post";
import { Profile } from "../../../apps/entities/Profile";
import { User } from "../../../apps/entities/user";
import { TokenStorageService } from "../../../auth/authentication/services/token-storage.service";
import { CompetanceService } from "../../../services/CompetanceService";
import { GeneralPostService } from "../../../services/generalpostService";
import { OfferService } from "../../../services/OfferTaskSolutionService";
import { ProfileService } from "../../../services/ProfileService";
import { UserService } from "../../../services/userService";


@Component({
  selector: 'ngx-supervisor-task',
  templateUrl: './supervisor-task.component.html',
  styleUrls: ['./supervisor-task.component.scss']
})
export class SupervisorTaskComponent implements OnInit {

  user:User
  profile:Profile
  mylist=new Array<GeneralPost>();
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  lcompetance=new Array<String>();
  lcompetances=new Array<Competance>();
  cmp: string;
  closeResult: string;
  saved;
  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;
  afficheDate;
  constructor(private competanceService: CompetanceService ,private modalService: NgbModal,private userService:UserService,private profileSerivce:ProfileService,private offerService:OfferService,private generalpostservice:GeneralPostService,private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
     this.bringmylist();
  }
  getOffer(myObj:any) {
    this.router.navigate(['supervisor/details' + '/' + myObj['id']]);
    }
  filtrer(location,categorie){
  
    let   retour=new Array<GeneralPost>();
    this.mylist=this.saved;
    if (location == 'All'&& categorie == 'All') {
     this.bringmylist();
  
    }
    if (location != 'All'&& categorie == 'All') {
      this.mylist.forEach(task=>{
        if(task.offertasksolution.location==location){
          retour.push(task);
        }
      })
  
    }
    if (location == 'All' && categorie != 'All') {
      this.mylist.forEach(task=>{
        if(task.offertasksolution.categorie==categorie){
          retour.push(task);
        }
      })
  
    }
   
    if (location != 'All' && categorie != 'All') {
      this.mylist.forEach(task=>{
        if(task.offertasksolution.location==location&&task.offertasksolution.categorie==categorie){
          retour.push(task);
        }
      })
  
    }
   
    this.mylist=retour;
  }
  applyFilter(event: Event) {

    
    let dataSource = new MatTableDataSource(this.mylist);
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
    console.log(dataSource)
    console.log(dataSource.filteredData)
    // this.tasks=[];
    if(dataSource.filter.length==0){
      this.bringmylist();
      console.log(this.mylist)
    }else{
    this.mylist=dataSource.filteredData
    console.log(this.mylist)}
    //dataSource.filteredData.forEach(element=>{this.tasks.push(element)})
    
    
  




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
bringmylist(){
  this.generalpostservice.listPubs().subscribe(res=>{
    this.mylist=res;
    let transferList=new Array<GeneralPost>();
    this.mylist.forEach(element=>{
      if(element.offertasksolution.type==1){
        transferList.push(element);
      }
    })
    this.mylist=transferList;
    this.saved=this.mylist;
    console.log(this.mylist);
  
}
  )
}
}
