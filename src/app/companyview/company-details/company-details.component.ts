import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Demande } from '../../apps/entities/demande';
import { DemandeService } from '../../services/demandeService';
import { GeneralPostService } from '../../services/generalpostService';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';
import { Profile } from 'c:/Users/loukas/Desktop/hemisphere/front-master/front-master/src/app/apps/entities/Profile';

@Component({
  selector: 'ngx-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  user: import("c:/Users/loukas/Desktop/hemisphere/front-master/front-master/src/app/apps/entities/user").User;
  profile: import("c:/Users/loukas/Desktop/hemisphere/front-master/front-master/src/app/apps/entities/Profile").Profile;
  id: any;
  generalPost: import("c:/Users/loukas/Desktop/hemisphere/front-master/front-master/src/app/apps/entities/General_Post").GeneralPost;
  closeResult: string;
  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;
  listDemandes=new Array<Demande>()
  pending="pending"
  approuved="Approuved"
  declined="Declined"
  profilestudent:Profile;
  constructor(private demandeService:DemandeService,private service: SmartTableData,private router:Router,private route:ActivatedRoute,private profileService:ProfileService, private generalPostService:GeneralPostService,private modalService: NgbModal,private userService:UserService) { 
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getoffer();
    this.listdemandes();
  }
  checkSupervision(){
    console.log("we try it here!!")
    console.log(this.supervised)
     return this.supervised;
 
   }
   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  getoffer(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      this.profileService.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        console.log("hetha profilna");
        console.log(this.profile);
        console.log(this.profile.name);
        console.log(this.profile.lastname);
        this.id = this.route.snapshot.params['id'];
    this.generalPostService.getPubById(this.id).subscribe(res=>{
      this.generalPost=res;
      console.log(this.generalPost);
      this.generalPost.offertasksolution
    
  })
})
})

  }
acceptdemande(demande:Demande){
  console.log(demande.profile);
  
this.demandeService.treatDemande(demande.id,1).subscribe(res=>{
  console.log(res);
  
})
this.reloadPage();
}
reloadPage(): void {
  window.location.reload();
}
declinedemande(demande:Demande){
  this.demandeService.treatDemande(demande.id,2).subscribe(res=>{
    console.log(res);
    
  })
  this.reloadPage();
}
  listdemandes(){
    this.id = this.route.snapshot.params['id'];
    this.demandeService.listDemandeByPostId(this.id).subscribe(res=>{
      this.listDemandes=res;
      console.log(this.listDemandes);
     
      
    })
  }

  deleteoffer(){
  let pub = this.generalPost;
  console.log(pub);
  
  this.generalPostService.delete(pub.id).subscribe(res=>{
    console.log(res);
    this.router.navigate(['company/offers']);
  })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openprofile(content,profile) {
    this.profilestudent=profile;
    console.log(this.profilestudent);
    
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
