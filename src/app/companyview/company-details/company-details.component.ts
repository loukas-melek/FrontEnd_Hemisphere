import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Comment } from '../../apps/entities/Comment';
import { Competance } from '../../apps/entities/Competance';
import { Demande } from '../../apps/entities/demande';
import { Experience } from '../../apps/entities/experience';
import { OfferTaskSolution } from '../../apps/entities/Offer_Task_Solution';
import { Project } from '../../apps/entities/project';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { CommentService } from '../../services/CommentService';
import { CompetanceService } from '../../services/CompetanceService';
import { DemandeService } from '../../services/demandeService';
import { ExperienceService } from '../../services/experienceService';
import { GeneralPostService } from '../../services/generalpostService';
import { OfferService } from '../../services/OfferTaskSolutionService';
import { ProfileService } from '../../services/ProfileService';
import { ProjectService } from '../../services/projectService';
import { UserService } from '../../services/userService';
import { GeneralPost } from 'c:/Users/loukas/Desktop/hemisphere/front-master/front-master/src/app/apps/entities/General_Post';
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
  edit: FormGroup;

  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"];
  comms=new Array<Comment>();
  offerCompetances=new Array<Competance>();
  comentaire=new Comment;
  commmentaire: string;
  count;
  project=new ProjectDto();
  confirmedList=new Array<Profile>();
  commnt: string;
  mine: boolean;
  myprofile: Profile;
  list: number[];
  experiencestudent=new Array<Experience>();
  projectstudent=new Array<ProjectDto>();
  constructor(private datepipe: DatePipe,private experienceService:ExperienceService,private competanceService:CompetanceService,private fb: FormBuilder,private offertaskService:OfferService,private projectService:ProjectService,private commentService:CommentService,private demandeService:DemandeService,private service: SmartTableData,private router:Router,private route:ActivatedRoute,private profileService:ProfileService, private generalPostService:GeneralPostService,private modalService: NgbModal,private userService:UserService) { 
  }
  formatDate(date:Date){
      
    return this.datepipe.transform(date, 'yyyy-MM-dd');
   }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.edit = this.fb.group({
      offer_type:[''],
      title:[''],
      poste:[''],
      location:[''],
      studentNumber:[''],
      categorie:[''],
      description:[''],
      cost:[''],
      id:[''],
      type:[''],
     });
    this.getoffer();
    this.listdemandes();
    // this.getCompetances();
  }
  openModal(targetModal, offer:OfferTaskSolution) {
    console.log(offer.description);
    
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
      type:offer.type,
      offer_type:offer.offer_type,
      title:offer.title,
      poste:offer.poste,
      location:offer.location,
      studentNumber:offer.studentNumber,
      categorie:offer.categorie,
      description:offer.description,
      cost:offer.cost,
      id:offer.id,
    });
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
  editOffer(){
    console.log(this.generalPost);
    console.log( this.edit.getRawValue());

    let pub=this.generalPost;
    console.log(pub.offertasksolution.type);
    
    pub.offertasksolution=this.edit.getRawValue();
    console.log(pub.offertasksolution);
    
    // if(this.title!=undefined){
    //   pub.offertasksolution.title=this.title;
    // }
    // if(this.poste!=undefined){
    //   pub.offertasksolution.poste=this.poste;
    // }
    // if(this.location!=undefined){
    //   pub.offertasksolution.location=this.location;
    // }
    // if(this.nofstudent!=undefined){
    //   pub.offertasksolution.studentNumber=this.nofstudent;
    // }
    // if(this.type!=undefined){
    //   pub.offertasksolution.offer_type=this.type;
    // }
    // if(this.categorie!=undefined){
    //   pub.offertasksolution.categorie=this.categorie;
    // }
    // if(this.description!=undefined){
    //   pub.offertasksolution.description=this.description;
    // }
    // if(this.cost!=undefined){
    //   pub.offertasksolution.cost=this.cost;
    // }
    console.log(pub);
    this.generalPostService.updatePub(pub.id,pub).subscribe(res=>{
      console.log(res);
      
    })
    // this.reloadPage();

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
    console.log(this.commmentaire);
    
    console.log("Wheeree in ");
      let pub=this.generalPost;
    
    this.comentaire.content=this.commmentaire;
    this.comentaire.profile=this.profile;
    this.comentaire.general_Post=pub;
    console.log(this.comentaire);
    
  this.commentService.createComment(this.comentaire).subscribe(res=>{
    console.log(res);
    console.log(this.comentaire);
})
this.ngOnInit();
}
getCompetances(){
 this.competanceService.getCompetancesByOfferId(this.route.snapshot.params['id']).subscribe(res=>{
  this.offerCompetances=res;
  console.log(this.offerCompetances);
  
 })
}
  getoffer(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      this.profileService.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        console.log("hetha profilna");
        this.myprofile=this.profile;
        console.log(this.profile);
        console.log(this.profile.name);
        console.log(this.profile.lastname);
        this.id = this.route.snapshot.params['id'];
    this.generalPostService.getPubById(this.id).subscribe(res=>{
      this.generalPost=res;
      console.log(this.generalPost);
      if(this.generalPost.profile.id==this.profile.id){
        console.log("mteee3na!!");
        
    this.mine=true;        
      }else
      if(this.generalPost.profile.id!=this.profile.id){
        console.log("maahoucj mtee3naa");
        
        
      
        this.mine=false;
      }
      console.log(this.mine);
      
      this.commentService.listCommentsByPub(this.generalPost.id).subscribe(res=>{
        this.comms=res;
        console.log(this.comms);
        this.count=this.comms.length
        console.log(this.count);
        
      })
      this.competanceService.getCompetancesByOfferId(this.generalPost.offertasksolution.id).subscribe(res=>{
        this.offerCompetances=res;
        console.log(this.offerCompetances);
        
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
ConfirmProject(){
  this.id = this.route.snapshot.params['id'];
  
  this.projectService.getByGeneralPost(this.id).subscribe(res=>{
    this.project=res;
    console.log(this.project);
    console.log(this.listDemandes);
    this.listDemandes.forEach(element=>{
      if(element.status==1){
        this.confirmedList=[];
        this.confirmedList.push(element.profile);
      }
      console.log(this.confirmedList);
      this.projectService.ConfirmeProject(this.project.project_id,this.confirmedList).subscribe(res=>{
        console.log(res);
        
      })
      
    })
    
    

  })
  
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
    this.experienceService.listExperienceByUser(this.profilestudent.id).subscribe(res=>{
      this.experiencestudent=res;
      
    })
    this.projectService.findProjectByStudent(this.profilestudent.id).subscribe(res=>{
      this.projectstudent=res;
    })
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
