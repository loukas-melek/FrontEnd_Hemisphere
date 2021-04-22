import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Demande } from '../../apps/entities/demande';
import { GeneralPost } from '../../apps/entities/General_Post';
import { Profile } from '../../apps/entities/Profile';
import { User } from '../../apps/entities/user';
import { DemandeService } from '../../services/demandeService';
import { GeneralPostService } from '../../services/generalpostService';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-student-details-task',
  templateUrl: './student-details-task.component.html',
  styleUrls: ['./student-details-task.component.scss']
})
export class StudentDetailsTaskComponent implements OnInit {
  id;
  generalPost:GeneralPost;
  closeResult;
  user:User
  motivation: string;
    profile: Profile
    result=new Array<Demande>()
    submitted: boolean;
    found: boolean;
    test=false;
    constructor(private route:ActivatedRoute,private profileService:ProfileService, private generalPostService:GeneralPostService,private modalService: NgbModal,private demandeService:DemandeService,private userService:UserService) { }
  
    ngOnInit(): void {
      this.getoffer();
  
      // this.getMyprofile();
      // this.checkForOld();
     
     console.log(this.result.length);
     console.log(this.result);
     
     
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
        
        this.demandeService.listDemandeByOfferId(this.generalPost.offertasksolution.id).subscribe(res=>{
           this.result=res;
           console.log("liste des demande pour cet offer");
           console.log(this.result);
           this.result.forEach(demande=>{
            console.log("dkhalna lel foreach lena");
            console.log(demande);
            if(demande.profile.id==this.profile.id){
              console.log("existss !!!");
              this.found=true;
              console.log(this.found);
              
              
            }
            else{
           this.found=false;
          console.log("mahouch mawjoud!!");
         
         }
         })
        
      })
    })
  })
  })
    }
    getMyprofile(){
      this.userService.whoami().subscribe(res=>{
        this.user=res;
        this.profileService.getProfileByUserId(this.user.id).subscribe(res=>{
          this.profile=res;
          console.log("hetha profilna");
          console.log(this.profile);
          console.log(this.profile.name);
          console.log(this.profile.lastname);
        })
      })
    }
    // subscriptiontolistdemandes(){
    //   this.demandeService.listDemandeByOfferId(this.generalPost.offertasksolution.id).subscribe(res=>{
    //     this.result=new Array<Demande>()
    //      this.result=res;
    //      console.log("liste des demande pour cet offer");
    //      console.log(this.result);
    //     })
    // }
    checkForOld():boolean{
      console.log("fl check for old func");
      console.log(this.found);
      
        return this.found;
    }
    addDemande() {
      console.log(this.motivation);
      
     if( !this.found){
      let d = new Demande()
      d.motivation = this.motivation;
      console.log(this.profile.id,"idusermotiv");
      d.profile = this.profile;
      d.isvalide=false;
      d.offer_Task_Solution=this.generalPost.offertasksolution
      console.log(d.offer_Task_Solution);
      
      console.log("dialog compo********");
      console.log(d);
      console.log(this.motivation);
      this.demandeService.create(d).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        ;}
      )
      window.alert("Application done with success !")
        }
        // this.modalService.dismissAll();
     
        //this.router.navigate(['projects/details/',this.d.offer.id]);
      
      
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
