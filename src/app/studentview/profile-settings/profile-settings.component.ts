import { Component, OnInit } from '@angular/core';
import { Profile } from '../../apps/entities/Profile';
import { User } from '../../apps/entities/user';
import { ProfileService } from '../../services/ProfileService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'ngx-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  user:User
  profile:Profile
  fileToUpload: File = null;  
  imageUrl: any;  
  formattedDate:string;
  myrole;
  profileupdated:Profile;
  userupdated:User;
  status;
  password;username;email;first:string;last:string;;location;city;phone;cpass;state;interests:string;languages;about;
  cnpass;npass;cpass
  constructor(private userService:UserService,private profileSerivce:ProfileService) { }

  ngOnInit(): void {
    this.getMyprofile();
  }
  onSelectFile(file: FileList) {  
    this.fileToUpload = file.item(0);  
    var reader = new FileReader();  
    reader.onload = (event: any) => {  
        this.imageUrl = event.target.result;  
    }  
    reader.readAsDataURL(this.fileToUpload);  
}
  getMyprofile(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      console.log("nchouf el pass te3na ");
      console.log(this.user.password);
      
      this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        this.profileupdated=this.profile;
        console.log("hetha profilna");
        console.log(this.profile);
        console.log(this.profile.name);
        console.log(this.profile.lastname);
        this.imageUrl=this.profile.profilePicUrl
        let d = new Date(this.profile.created_at);
        let c ;
        console.log(d.getMonth());
        
        if(this.user.roles.toString()=="ROLE_STUDENT"){
          this.myrole="Student"
        }
        if(this.user.roles.toString()=="ROLE_COMPANY"){
          this.myrole="Company"
        }
        if(this.user.roles.toString()=="ROLE_ADMIN"){
          this.myrole="Admin"
        }
        switch(d.getMonth()+1){
        case 1:
            c="Jan"
            break;
        case 2:
            c="Feb"
            break;
        case 3:
            c="Mar"
            break;
        case 4:
            c="Apr"
            break;
        case 5:
            c="May"
            break;
        case 6:
            c="Jun"
            break;
            case 7:
            c="Jul"
            break;
            case 8:
            c="Aug"
            break;
            case 9:
            c="Sep"
            break;
            case 10:
            c="Oct"
            break;
            case 11:
            c="Nov"
            break;
            case 12:
            c="Dec"
            break;
        default:
            console.log("No such Month exists!");
            break;
        }
        this.formattedDate= d.getDate().toString()+", "+c+", "+d.getFullYear().toString()
        console.log(d.getDate().toString());
        console.log(this.formattedDate);
        console.log(new Date().toISOString())
        
        
      })
    })
  }
  updateprofile(){
    let profileup=this.profile;
    if(this.city!=undefined){
      profileup.city=this.city;
    }
    if(this.interests!=undefined){
      profileup.interests=this.interests;
    }
    if(this.languages!=undefined){
      profileup.languages=this.languages;
    }
    if(this.last!=undefined){
      profileup.lastname=this.last;
    }
    if(this.state!=undefined){
      profileup.state=this.state;
    }
    if(this.phone!=undefined){
      profileup.phone=this.phone;
    }
    if(this.location!=undefined){
      profileup.location=this.location;
    }
    if(this.first!=undefined){
      profileup.name=this.first;
    }
    if(this.about!=undefined){
      profileup.about=this.about;
    }
    if(this.imageUrl!=undefined){
      profileup.profilePicUrl=this.imageUrl;
    }
    
   console.log(this.profile.name);
  
    console.log(this.profileupdated);
    
    this.profileSerivce.updateprofile(this.profile.id,this.profileupdated).subscribe(res=>{
      let p = res
      console.log(p);
      
    })
    this.reloadPage();
  }
  updateuser(){
    console.log("testt aal pass");
    
    console.log(this.cpass,this.cnpass,this.npass);
    console.log(this.user.password);
    
    this.userupdated=this.user
    if(this.username!=undefined){
      this.userupdated.username=this.username;
    }
    if(this.email!=undefined){
      this.userupdated.email=this.email
    }
    if(this.npass!=undefined){
     
      this.userService.checkPass(this.user.id,this.cpass).subscribe(res=>{
        let isvalide=res;
      console.log(isvalide);
      
      if(isvalide){
        console.log(this.npass,this.cnpass);
        
      if(this.npass==this.cnpass){
        this.userupdated.password=this.npass}
    }
 
   
    console.log(this.userupdated);
    
    this.userService.updateUser(this.user.id,this.userupdated).subscribe(res=>{
      console.log(res);
      
    })
  })
   this.reloadPage();
  }
}
  reloadPage(): void {
    window.location.reload();
  }
}
