import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Competance } from '../../apps/entities/Competance';
import { GeneralPost } from '../../apps/entities/General_Post';
import { Profile } from '../../apps/entities/Profile';
import { User } from '../../apps/entities/user';
import { TokenStorageService } from '../../auth/authentication/services/token-storage.service';
import { GeneralPostService } from '../../services/generalpostService';
import { OfferService } from '../../services/OfferTaskSolutionService';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-seekfortasks',
  templateUrl: './seekfortasks.component.html',
  styleUrls: ['./seekfortasks.component.scss']
})
export class SeekfortasksComponent implements OnInit {
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
  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;

  constructor(private modalService: NgbModal,private userService:UserService,private profileSerivce:ProfileService,private offerService:OfferService,private generalpostservice:GeneralPostService,private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
     this.bringmylist();
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
  })
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

}
