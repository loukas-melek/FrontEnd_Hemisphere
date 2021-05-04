import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'rxjs/operators';
import { Comment } from '../../apps/entities/Comment';
import { Demande } from '../../apps/entities/demande';
import { GeneralPost } from '../../apps/entities/General_Post';
import { OfferTaskSolution } from '../../apps/entities/Offer_Task_Solution';
import { Profile } from '../../apps/entities/Profile';
import { User } from '../../apps/entities/user';
import { CommentService } from '../../services/CommentService';
import { DemandeService } from '../../services/demandeService';
import { GeneralPostService } from '../../services/generalpostService';
import { OfferService } from '../../services/OfferTaskSolutionService';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-student-details-offer',
  templateUrl: './student-details-offer.component.html',
  styleUrls: ['./student-details-offer.component.scss']
})
export class StudentDetailsOfferComponent implements OnInit {
id;
generalPost:GeneralPost;
closeResult;
user:User
motivation: string;
emotivation: string;
  profile: Profile
  result=new Array<Demande>()
  submitted: boolean;
  found: boolean;
  test=false;
  myapp:Demande;
 commnt
 edit: FormGroup;
  comentaire=new Comment();
  comms=new Array<Comment>();
  commennt: string;
  count: number;
  constructor(private fb: FormBuilder,private commentService:CommentService,private route:ActivatedRoute,private profileService:ProfileService, private generalPostService:GeneralPostService,private modalService: NgbModal,private demandeService:DemandeService,private userService:UserService) { }

  ngOnInit(): void {
    this.edit = this.fb.group({
      motivation:[''],
   
     });
    this.getoffer();

    // this.getMyprofile();
    // this.checkForOld();
   
   console.log(this.result.length);
   console.log(this.result);
   
   
  }

  addComment(){
    console.log(this.commennt);
    
    console.log("Wheeree in ");
      let pub=this.generalPost;
    
    this.comentaire.content=this.commennt;
    this.comentaire.profile=this.profile;
    this.comentaire.general_Post=pub;
    console.log(this.comentaire);
    
  this.commentService.createComment(this.comentaire).subscribe(res=>{
    console.log(res);
    console.log(this.comentaire);
})
this.ngOnInit();
}
addReply(comment:Comment){
  let pub=this.generalPost;
    
    this.comentaire.content=this.commnt;
    this.comentaire.profile=this.profile;
    this.comentaire.id_comment=comment;
    console.log(this.comentaire);
    
  this.commentService.createComment(this.comentaire).subscribe(res=>{
    console.log(res);
    console.log(this.comentaire);
})
this.ngOnInit();
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
      
      this.demandeService.listDemandeByPostId(this.generalPost.id).subscribe(res=>{
         this.result=res;
         console.log("liste des demande pour cet offer");
         console.log(this.result);
         this.result.forEach(demande=>{
          console.log("dkhalna lel foreach lena");
          console.log(demande);
          if(demande.profile.id==this.profile.id){
            this.myapp=demande
            console.log(this.myapp);
            
            console.log("existss !!!");
            this.found=true;
            console.log(this.found);
            
            
          }
          else{
         this.found=false;
        console.log("mahouch mawjoud!!");
       
       }
       })
       this.commentService.listCommentsByPub(this.generalPost.id).subscribe(res=>{
        this.comms=res;
        console.log(this.comms);
        this.count=this.comms.length
        
      })
      
    })
  })
})
})
  }
  delete(){
    if(confirm("Are you sure to cancel your application ? ")) {
      console.log("Implement delete functionality here");
    this.demandeService.deleteOffer(this.myapp.id).subscribe(res=>{
      console.log(res);
      this.reloadPage();
    })
  }
  }
  reloadPage(): void {
    window.location.reload();
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
  editDemande(){
    console.log( this.edit.value.motivation);
    let newd=this.myapp;
    newd.motivation=this.edit.value.motivation;

    this.demandeService.updateDemande(this.myapp.id,newd).subscribe(res=>{
      console.log(res);
      this.reloadPage();
      
    })
  }
  openModal(targetModal, demande:Demande) {
    this.modalService.open(targetModal, {
      ariaLabelledBy: 'modal-basic-title' ,size:'lg',
     centered: true,
     backdrop: 'static'
    })
    .result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    
    });
   
    this.edit.patchValue({
      motivation:demande.motivation
    });
   }
  
  addDemande() {
    console.log(this.motivation);
    
   if( !this.found){
    let d = new Demande()
    d.motivation = this.motivation;
    console.log(this.profile.id,"idusermotiv");
    d.profile = this.profile;
    d.isvalide=false;
    d.generalpost=this.generalPost
    console.log(d.generalpost);
    
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
    this.reloadPage()
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
