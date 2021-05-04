import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from '../../apps/entities/experience';
import { Profile } from '../../apps/entities/Profile';
import { Project } from '../../apps/entities/project';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { TypeOffer } from '../../apps/entities/TypeOffer';
import { User } from '../../apps/entities/user';
import { ExperienceService } from '../../services/experienceService';
import { ProfileService } from '../../services/ProfileService';
import { ProjectService } from '../../services/projectService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:Profile;
  experiences=new Array<Experience>();
  type:TypeOffer;company;description;date:Date;title
  typeE:TypeOffer;companyE;descriptionE;dateE:Date;titleE
  typesE=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  edit: FormGroup;
  closeResult: string;
  myProjects=new Array<ProjectDto>();
  types=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
    constructor(private datepipe: DatePipe,private projectService:ProjectService,private fb: FormBuilder,private modalService: NgbModal,private userService:UserService,private experienceService:ExperienceService,private profileSerivce:ProfileService,private router: Router) { }
  
    ngOnInit(): void {
      this.edit = this.fb.group({
        type:[''],
        profile: [''],
        company: [''],
        description: [''],
        date: [''],
        title:[''],
        id:[''],
       });
      this.getMyprofile();
    }
    getMySettings() {
      this.router.navigate(['student/profile/settings']);
      }
    getMyprofile(){
      this.userService.whoami().subscribe(res=>{
        this.user=res;
        this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
          this.profile=res;
          console.log("hetha profilna");
          console.log(this.profile);
          this.experienceService.listExperienceByUser(this.profile.id).subscribe(res=>{
            this.experiences=res;
            console.log(this.experiences);
            this.projectService.findProjectByStudent(this.profile.id).subscribe(res=>{
              this.myProjects=res;
              
            })
          })
        })
      })
    }
    formatDate(date:Date){
      
      return this.datepipe.transform(date, 'yyyy-MM-dd');
     }
    createExperience(){
      let experience = new Experience()
      experience.company=this.company;
      experience.profile=this.profile;
      experience.type=this.type
      experience.description=this.description;
      experience.title=this.title;
      console.log(experience);
      this.experienceService.createExperience(experience).subscribe(res=>{
        console.log(res);
        
      })
      this.modalService.dismissAll();
      this.ngOnInit();
    }
    editExperience(){
      console.log("fwest el fun");
      console.log( this.edit.getRawValue());
      let experience = new Experience();
      experience=this.edit.getRawValue();
        console.log(experience);
        console.log(experience.id);
     
     
      this.experienceService.updateExperience(experience).subscribe(res=>{
        console.log(res);
        
      })
  
      this.modalService.dismissAll();
         this.ngOnInit();
      
    }
    deleteExperience(ex:Experience){
     
      console.log(ex);
      confirm("Are you sure to delete this experience?")

      this.experienceService.delete(ex.id).subscribe(res=>{
        console.log(res);
        
      })
      this.ngOnInit()

    }
    open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      
    }
    openModal(targetModal, experience:Experience) {
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
        type:experience.type,
        profile: experience.profile,
        company: experience.company,
        description: experience.description,
        title:experience.title,
        id:experience.id
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
