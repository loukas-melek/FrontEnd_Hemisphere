import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
import { Step } from '../../apps/entities/step';
import { StepFlatNode } from '../../apps/entities/stepFlatNode';
import { ProjectService } from '../../services/projectService';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';
import { User } from '../../apps/entities/user';
import { Profile } from '../../apps/entities/Profile';
import { Project } from '../../apps/entities/project';
import { ProjectDto } from '../../apps/entities/ProjectDto';




@Component({
  selector: 'ngx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

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
      this.router.navigate(['dashboard/workflow' + '/' + myObj['project_id']]);
      }
  }
  
  
