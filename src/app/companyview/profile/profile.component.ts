import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../apps/entities/Profile';
import { Project } from '../../apps/entities/project';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { User } from '../../apps/entities/user';
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
  myprojects=new Array<ProjectDto>();
    constructor(private projectService:ProjectService,private userService:UserService,private profileSerivce:ProfileService,private router: Router) { }
  
    ngOnInit(): void {
      this.getMyprofile();
      
    }
    getMySettings() {
      this.router.navigate(['profile/settings']);
      }
    getMyprofile(){
      this.userService.whoami().subscribe(res=>{
        this.user=res;
        this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
          this.profile=res;
          console.log("hetha profilna");
          console.log(this.profile);
          this.projectService.findbyProfileId(this.profile.id).subscribe(res=>{
            this.myprojects=res;
            console.log(this.myprojects);
            
          })
          
        })
      })
    }
   
  }
  