import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../apps/entities/Profile';
import { User } from '../../apps/entities/user';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:Profile;
    constructor(private userService:UserService,private profileSerivce:ProfileService,private router: Router) { }
  
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
          
        })
      })
    }
  }
  