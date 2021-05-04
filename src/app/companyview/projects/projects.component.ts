import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../apps/entities/Profile';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { User } from '../../apps/entities/user';
import { ProfileService } from '../../services/ProfileService';
import { ProjectService } from '../../services/projectService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  user:User;
  profile:Profile;
  myProjects=new Array<ProjectDto>();

  constructor(private router: Router,private projectService:ProjectService,private userService:UserService,private profileSerivce:ProfileService,) { }

  ngOnInit() {
   
    this.getMyProjects()
  }
  getMyProjects(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        console.log("hetha profilna");
        console.log(this.profile);
       
          this.projectService.findbyProfileId(this.profile.id).subscribe(res=>{
            this.myProjects=res;
            console.log(this.myProjects);
            
            
          })
        })
      })
    }
    getWorkflow(myObj:any) {
      this.router.navigate(['company/workflow' + '/' + myObj['project_id']]);
      }
  }
  

