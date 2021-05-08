import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GeneralPost } from '../../../apps/entities/General_Post';
import { OfferTaskSolution } from '../../../apps/entities/Offer_Task_Solution';
import { Profile } from '../../../apps/entities/Profile';
import { User } from '../../../apps/entities/user';
import { TokenStorageService } from '../../../auth/authentication/services/token-storage.service';
import { GeneralPostService } from '../../../services/generalpostService';
import { OfferService } from '../../../services/OfferTaskSolutionService';
import { ProfileService } from '../../../services/ProfileService';
import { UserService } from '../../../services/userService';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Competance } from '../../../apps/entities/Competance';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CompetanceService } from '../../../services/CompetanceService';
@Component({
  selector: 'ngx-company-my-offers',
  templateUrl: './company-my-offers.component.html',
  styleUrls: ['./company-my-offers.component.scss']
})
export class CompanyMyOffersComponent implements OnInit {

  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;
  offers=new Array<GeneralPost>();
  token;
  user:User;
  afficheDate
  closeResult: string;
  profile:Profile
  edit: FormGroup;
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  saved: GeneralPost[];
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredCompetances: Observable<string[]>;
  competances: string[] = [];
  allCompetances: Competance[] = [];  
  ListCompetances:string[] = [];
  lcompetance=new Array<string>();
  lcompetances=new Array<Competance>();
  @ViewChild('fruitInput') CompetanceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private competanceService: CompetanceService ,private fb: FormBuilder,private modalService: NgbModal,private userService:UserService,private profileSerivce:ProfileService,private offerService:OfferService,private generalpostservice:GeneralPostService,private router: Router,private tokenStorage: TokenStorageService) {
    this.filteredCompetances = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.ListCompetances.slice()));
   }

  ngOnInit(): void {
    this.edit = this.fb.group({
      typeE:[''],
      profileE: [''],
      companyE: [''],
      descriptionE: [''],
      dateE: [''],
      titleE:[''],
      id:[''],
     });
    this.listoffers();
    
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
  checkSupervision(){
         console.log("we try it here!!")
         console.log(this.supervised)
          return this.supervised;
      
        }
   open(content) {
     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'lg'}).result.then((result) => {
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

      createOffer() {
     console.log(this.profile);
     let competance = new Competance();

     let offer=new OfferTaskSolution();
     console.log("just testing the toogle value");
     console.log(this.supervised);
     offer.categorie=this.categorie
     offer.title=this.title;
     offer.type=0;
     offer.offer_type=this.type;
     offer.description=this.description;
     offer.location=this.location;
     offer.studentNumber=this.nofstudent;
    
    //  let nn =moment().utc().toDate();
    //  console.log(nn);
    //  nn.setHours(nn.getHours()+1);
    
     offer.cost=this.cost;
     if(this.supervised){
       offer.isSupervised=1;
     }
     if(this.supervised==false){
       offer.isSupervised=0;
     }
   
     console.log("we start to create offer and this is the value");
     console.log(offer);
     this.offerService.createOfferTaskSolution(offer,this.profile.id).subscribe(
       res=>{
         let created=res;
         console.log(res);
         this.competances.forEach(element=>{
          console.log("dkhalna lel for each");
          
          
          competance.competance=element;
          console.log(element);
          
          this.competanceService.createCompetance(competance,created.id).subscribe(res=>{
            console.log(res);
            
            console.log(competance.competance);
            
            
          })
        })
         this.modalService.dismissAll();
     this.ngOnInit();
       }
     )
     }
  listoffers(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        console.log("hetha profilna");
        
        console.log(this.profile);
        
    
    
    this.generalpostservice.listPubsByUser(this.profile.id).subscribe(res=>{
      
      this.offers=res;
      
      console.log(this.offers);
      let foffer=new Array<GeneralPost>();
      this.offers.forEach(element=>{
        
        if(element.offertasksolution.type==0){
          foffer.push(element);
          console.log(foffer);
        }
      })
      this.offers=foffer;
      this.saved=foffer
      console.log(this.offers);
    
      
      
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
 
  getOffer(id) {
    this.router.navigate(['company/detail' + '/' + id]);
    }
    isVide(list:Array<OfferTaskSolution>){
      if(list.length==0){
        return true
      }else return false;
    }
    filtrer(location,type,categorie){
  
      let   retour=new Array<GeneralPost>();
      this.offers=this.saved;
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

}
