import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Comment } from '../../apps/entities/Comment';
import { Demande } from '../../apps/entities/demande';
import { CommentService } from '../../services/CommentService';
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
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  comms=new Array<Comment>();
  comentaire=new Comment;
  comm: string;
  count;
  
  constructor(private commentService:CommentService,private demandeService:DemandeService,private service: SmartTableData,private router:Router,private route:ActivatedRoute,private profileService:ProfileService, private generalPostService:GeneralPostService,private modalService: NgbModal,private userService:UserService) { 
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getoffer();
    this.listdemandes();
  }
  editOffer(){
    console.log(this.generalPost);
    
    let pub=this.generalPost;
    if(this.title!=undefined){
      pub.offertasksolution.title=this.title;
    }
    if(this.poste!=undefined){
      pub.offertasksolution.poste=this.poste;
    }
    if(this.location!=undefined){
      pub.offertasksolution.location=this.location;
    }
    if(this.nofstudent!=undefined){
      pub.offertasksolution.studentNumber=this.nofstudent;
    }
    if(this.type!=undefined){
      pub.offertasksolution.type=this.type;
    }
    if(this.categorie!=undefined){
      pub.offertasksolution.categorie=this.categorie;
    }
    if(this.description!=undefined){
      pub.offertasksolution.description=this.description;
    }
    if(this.cost!=undefined){
      pub.offertasksolution.cost=this.cost;
    }
    console.log(pub);
    this.generalPostService.updatePub(pub.id,pub).subscribe(res=>{
      console.log(res);
      
    })
    this.reloadPage();

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
 
  addComment(){
    console.log(this.comm);
    
    console.log("Wheeree in ");
      let pub=this.generalPost;
    
    this.comentaire.content=this.comm;
    this.comentaire.profile=this.profile;
    this.comentaire.general_Post=pub;
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
      this.commentService.listCommentsByPub(this.generalPost.id).subscribe(res=>{
        this.comms=res;
        console.log(this.comms);
        this.count=this.comms.length
        console.log(this.count);
        
      })

    
  })
})
})

  }
acceptdemande(demande:Demande){
  if(confirm("Are you sure to approuve "+demande.profile.name+" for this job ? ")) {
    console.log("Implement delete functionality here");
  console.log(demande.profile);
  
this.demandeService.treatDemande(demande.id,1).subscribe(res=>{
  console.log(res);
  
})
this.reloadPage();
  }
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
    if(confirm("Are you sure to cancel your offer ? ")) {
      console.log("Implement delete functionality here");
      let pub = this.generalPost;
  console.log(pub);
  
  this.generalPostService.delete(pub.id).subscribe(res=>{
    console.log(res);
    this.router.navigate(['company/offers']);
  })
    }
  
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
