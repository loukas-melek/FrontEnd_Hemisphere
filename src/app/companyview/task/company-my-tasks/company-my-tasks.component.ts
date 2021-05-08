import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Competance } from '../../../apps/entities/Competance';
import { GeneralPost } from '../../../apps/entities/General_Post';
import { OfferTaskSolution } from '../../../apps/entities/Offer_Task_Solution';
import { Profile } from '../../../apps/entities/Profile';
import { User } from '../../../apps/entities/user';
import { TokenStorageService } from '../../../auth/authentication/services/token-storage.service';
import { CompetanceService } from '../../../services/CompetanceService';
import { GeneralPostService } from '../../../services/generalpostService';
import { OfferService } from '../../../services/OfferTaskSolutionService';
import { ProfileService } from '../../../services/ProfileService';
import { UserService } from '../../../services/userService';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngx-company-my-tasks',
  templateUrl: './company-my-tasks.component.html',
  styleUrls: ['./company-my-tasks.component.scss']
})
export class CompanyMyTasksComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings ={} ;
  user:User
  profile:Profile
  mylist=new Array<GeneralPost>();
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  lcompetance=new Array<string>();
  lcompetances=new Array<Competance>();
  cmp: string;
  closeResult: string;
  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;
  afficheDate;
  saved
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredCompetances: Observable<string[]>;
  competances: string[] = [];
  allCompetances: Competance[] = [];  
  ListCompetances:string[] = [];

  @ViewChild('fruitInput') CompetanceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private competanceService: CompetanceService ,private modalService: NgbModal,private userService:UserService,private profileSerivce:ProfileService,private offerService:OfferService,private generalpostservice:GeneralPostService,private router: Router,private tokenStorage: TokenStorageService) { 
    this.filteredCompetances = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.ListCompetances.slice()));
  }

  ngOnInit(): void {
     this.bringmylist();
  }
  getOffer(id) {
    this.router.navigate(['company/detail' + '/' + id]);
    }
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.competances.push(value.trim());
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
  
      this.fruitCtrl.setValue(null);
    }
    remove(competance: string): void {
      const index = this.competances.indexOf(competance);
  
      if (index >= 0) {
        this.competances.splice(index, 1);
      }
    }
    selected(event: MatAutocompleteSelectedEvent): void {
      this.competances.push(event.option.viewValue);
      this.CompetanceInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.ListCompetances.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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
bringmylist(){
  this.userService.whoami().subscribe(res=>{
    this.user=res;
    this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
      this.profile=res;
      console.log("hetha profilna");
      
      console.log(this.profile);
      
   
  console.log(this.profile);
  this.generalpostservice.listPubsByUser(this.profile.id).subscribe(res=>{
    this.mylist=res;
    let transferList=new Array<GeneralPost>();
    this.mylist.forEach(element=>{
      if(element.offertasksolution.type==1){
        transferList.push(element);
      }
      this.competanceService.listCompetances().subscribe(res=>{
        this.allCompetances=res;
        console.log(this.allCompetances);
        this.allCompetances.forEach(element=>{
          this.ListCompetances.push(element.competance);
        })
        
      })
    })
    this.mylist=transferList;
    this.saved=this.mylist
    console.log(this.mylist);
    this.mylist.forEach(element=>{
     this.changeDate(element.updated_at);
      
    }
     
    )
  })
})
})
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
addcmp(){
       if(this.cmp!=null){
         this.lcompetance.push(this.cmp)
       }
       
     }
       removeone(i){
     console.log(i);
     
     this.lcompetance.splice(i);
     console.log(this.lcompetance);
     
   }
getMyprofile(){
  this.userService.whoami().subscribe(res=>{
    this.user=res;
    this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
      this.profile=res;
      console.log("hetha profilna");
      
      console.log(this.profile);
      
    })
  })
}
    createTask() {
    
      console.log("nchoufou el competances");
      console.log(this.competances);
      
     let competance = new Competance();
     let task=new OfferTaskSolution();
     console.log("just testing the toogle value");
     console.log(this.supervised);
     task.categorie=this.categorie;
     task.type=1;
     console.log(this.categorie);
     task.title=this.title;
     console.log(this.title);
    
  
     console.log(task.competance);
     
     
     
     task.description=this.description;
     console.log(this.description);
     task.location=this.location;
    
     task.cost=this.cost;
     if(this.supervised){
       task.isSupervised=1;
     }
     if(this.supervised==false){
       task.isSupervised=0;
     }
     
     console.log("we start to create offer and this is the value");
     console.log(task);
     this.offerService.createOfferTaskSolution(task,this.profile.id).subscribe(
       res=>{
         let tasktosend=res;
        
         console.log(res);
         this.competances.forEach(element=>{
          console.log("dkhalna lel for each");
          
          
          competance.competance=element;
          console.log(element);
          
          this.competanceService.createCompetance(competance,tasktosend.id).subscribe(res=>{
            console.log(res);
            
            console.log(competance.competance);
            console.log(task.competance);
            
            
          })
          
        })
        //  this.modalService.dismissAll();
        //  this.ngOnInit();
       }
     )
 
  
   }
checkSupervision(){
       console.log("we try it here!!")
       console.log(this.supervised)
        return this.supervised;
    
      }

 open(content) {
   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'md'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return `with: ${reason}`;
   }
 }

}
