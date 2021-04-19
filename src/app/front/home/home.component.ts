

import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;

import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


import * as moment from 'moment';
import { Competance } from '../../apps/entities/Competance';
import { User } from '../../apps/entities/user';
import { SharedPostService } from '../../services/SharedPostService';
import { LikeService } from '../../services/likeService';
import { CommentService } from '../../services/CommentService';
import { OfferService } from '../../services/OfferTaskSolutionService';
import { CompetanceService } from '../../services/CompetanceService';
import { UserService } from '../../services/userService';
import { PostService } from '../../services/postService';
import { Task } from '../../apps/entities/Task';
import { SharedPost } from '../../apps/entities/SharedPost';
import { Post } from '../../apps/entities/Post';
import { Comment } from '../../apps/entities/Comment';
import { Like } from '../../apps/entities/like';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private alive = true;
  
  

  title;poste;location;nofstudent;type;categorie;cname;description;date;cost;supervised=false;
  // nlike:Observable<number>;
  lcompetances=new Array<Competance>();
  nlike;
   closeResult: string;
   fileToUpload: File = null;  
   imageUrl: any;  
   contentt: any;
   username: string;
 isEmojiPickerVisible: boolean=false;
 toggled: boolean = false;
 
   //Pubs=new Array<Pub>();
   comms=new Array<Comment>();
   idp=new Array<number>();
   comm:string;
   
  user=new User();
  isLiked:number;
  typess=["PFE","PFA","STAGE","EMPLOIS","OTHER"];
  categories=["INFORMATIQUE","FINANCE","MANAGEMENT","SECURITY","COMMERCE","ELECTRIQUE","ENERGITIQUE","MECANIQUE","CHIMIE","OTHER"];
  locations=["Tunis","Bizert","HomeWorking","Online","BenArous","Siliana","SidBouzid","Monastir","Mednine","Ariana","Gafsa","Gabes","Sousse","Nabel","Manouba","Beja","Zaghouan","Kbili","Kasserine","Mahdia","Sfax","Karouane","Tozeur","Kef","Jendouba","Tatouine","Other"]; 
 
  lcompetance=new Array<String>();
   cmp: string;

   private subscription: Subscription;


   public dateNow = new Date();
    public dDay = new Date('octobre 25 2021 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;
    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;
    public daysToDday;
   constructor(private sharePostService:SharedPostService,private likeService:LikeService,private commentService:CommentService,private offerservice:OfferService,private competanceService: CompetanceService ,
    private modalService: NgbModal,private router: Router,private userService:UserService,private postService:PostService) { }
    private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }
  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}
getMyRole(){
  this.userService.whoami().subscribe(res=>{
    this.user=res;
    console.log(this.user.roles);
    
  })
}
   ngOnInit(): void {
     this.getMyRole();
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });

//      this.listMyTasks();
//      this.commentService.listComments().subscribe(res=>{
//        this.comms=res;
       
//      })
//  this.commentService.listComments().subscribe(res=>{
//    this.comms=res;
   
//  })
//      console.log(this.Pubs);
 
     
    
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
 }
 
//    public addEmoji(event) {
//      this.contentt = `${this.contentt}${event.emoji.native}`;
//      this.isEmojiPickerVisible = false;
//   }
//   listerCompetanceByPub(id){
//     this.competanceService.getCompetancesByOfferId(id).subscribe(res=>{
// this.lcompetances=res;
// console.log(this.lcompetances);

//     })
//   }
//   addEmojiComm(event){
//    this.comm = `${this.comm}${event.emoji.native}`;
//    this.isEmojiPickerVisible = false;
//   }
//   handleSelection(event) {
//    console.log(event.char);
//    this.comm += event.char;
 
//  }
//    commentShow(idp){
//      let cont=0;
//     let index=-1;
//      this.idp.forEach(element=>{
   
//        if(idp==element)
//        { 
//          index=cont;
//        }  
//        cont++;
//        })
//        if(index==-1)
//        {
//          this.idp.push(idp)
//        }
//        else(this.idp.splice(index,1))
 
     
   
//    }
//    checkSupervision(){
//      console.log("we try it here!!")
//      console.log(this.supervised)
//       return this.supervised;
  
//     }
//     createOffer() {
//      this.username = sessionStorage.getItem('username');
//      this.userService.getUserByEmail(this.username).subscribe(res => {
//        this.user = res;
//        console.log(this.user.id);
//      let offer=new Offer();
//      console.log("just testing the toogle value");
//      console.log(this.supervised);
//      offer.categorie=this.categorie
//      offer.cname=this.cname;
//      offer.ipath=this.user.image;
//      offer.title=this.title;
//      offer.type=this.type;
//      offer.description=this.description;
//      offer.location=this.location;
//      offer.studentNumber=this.nofstudent;
    
//      let nn =moment().utc().toDate();
//      console.log(nn);
//      nn.setHours(nn.getHours()+1);
//      offer.date=nn;
//      offer.cost=this.cost;
//      if(this.supervised){
//        offer.isSupervised=1;
//      }
//      if(this.supervised==false){
//        offer.isSupervised=0;
//      }
   
//      console.log("we start to create offer and this is the value");
//      console.log(offer);
//      this.offerservice.createOffer(offer,this.user.id).subscribe(
//        res=>{
//          console.log(res);
//          this.modalService.dismissAll();
//      this.ngOnInit();
//        }
//      )
//      })
    
//    }
 
//    addcmp(){
//      if(this.cmp!=null){
//        this.lcompetance.push(this.cmp)
//      }
     
//    }
//    isVide(list:Array<Offer>){
//      if(list.length==0){
//        return true
//      }else return false;
//    }
//     createTask() {
    
//      this.username = sessionStorage.getItem('username');
//    this.userService.getUserByEmail(this.username).subscribe(res => {
//      this.user = res;
//      console.log(this.user.id);
//      let competance = new Competance();
//      let task=new Task();
//      console.log("just testing the toogle value");
//      console.log(this.supervised);
//      task.categorie=this.categorie;
//      console.log(this.categorie);
//      task.title=this.title;
//      console.log(this.title);
//      this.lcompetance.forEach(element=>{
//        console.log("dkhalna lel for each");
       
       
//        competance.competance=element;
//        console.log(element);
       
//        this.competanceService.createCompetance(competance).subscribe(res=>{
//          console.log(competance.competance);
//          console.log(task.competance);
         
         
//        })
       
//      })
//      console.log(task.competance);
     
     
     
//      task.description=this.description;
//      console.log(this.description);
//      task.location=this.location;
//      let nn =moment().utc().toDate();
//      console.log(nn);
//      nn.setHours(nn.getHours()+1);
//      task.date=nn;
    
//      task.cost=this.cost;
//      if(this.supervised){
//        task.isSupervised=1;
//      }
//      if(this.supervised==false){
//        task.isSupervised=0;
//      }
     
//      console.log("we start to create offer and this is the value");
//      console.log(task);
//      this.taskservice.createTask(task,this.user.id).subscribe(
//        res=>{
//          console.log(res);
//          this.modalService.dismissAll();
//          this.ngOnInit();
//        }
//      )
      
//    })
 
  
//    }
  
//    getOffer(myObj:any) {
//      this.router.navigate(['details' + '/' + myObj['id']]);
//      }
//      getTask(myObj:any) {
//       this.router.navigate(['details' + '/' + myObj['id']]);
//       }
//    listMyTasks(){
     
//     console.log(new Date());
    
    
//      this.pubService.listPubs().subscribe(res=>{
     
//        this.Pubs=res;
//        console.log(this.Pubs)
//        this.Pubs.forEach(pub=>{
     
//         this.commentService.numberComments(pub.id).subscribe(res=>{
//          pub.ncomment=res;
 
//          })
//          this.sharePostService.numberShares(pub.id).subscribe(res=>{
//            pub.nshare=res;
//          })
//        })
//        this.Pubs.forEach(pub=>{
//              console.log("for now we test here !! ");
         
//          if(new Date().getMonth()-new Date(pub.updated_at).getMonth()==0){
 
//            if(new Date().getDay()-new Date(pub.updated_at).getDay()==0){
 
//              if(new Date().getHours()-new Date(pub.updated_at).getHours()==0){
 
//                if(new Date().getMinutes()-new Date(pub.updated_at).getMinutes()==0){
 
//                  pub.affichedate=new String(new Date().getSeconds()-new Date(pub.updated_at).getSeconds()+ " Secounds Ago")
//                  console.log("test unitaire1 !!!!");
//                  console.log(pub.affichedate);
                 
                 
                 
 
//                }else{
//                  pub.affichedate=new String(new Date().getMinutes()-new Date(pub.updated_at).getMinutes()+" Minutes Ago")
//                  console.log("test unitaire2 !!!!");
//                 console.log(pub.affichedate);
                
//                }
 
//              }else{
//                console.log("test unitaire3 !!!!");
//                pub.affichedate=new String(new Date().getHours()-new Date(pub.updated_at).getHours()+1+" Hours Ago")
//                console.log(pub.affichedate);
               
//              }
 
//            }else{
//              console.log("test unitaire4!!!!");
//              pub.affichedate=new String(new Date().getDay()-new Date(pub.updated_at).getDay()+" Days Ago")
//            console.log(pub.affichedate);
           
//            }
 
//          }else{
//            console.log("test unitaire5 !!!!");
//            pub.affichedate=new String(new Date().getMonth()-new Date(pub.updated_at).getMonth()+" Months Ago")
//            console.log(pub.affichedate);
           
//          }
//            console.log("we log here the results");
           
//            console.log(pub.affichedate);
 
//            this.pubService.updatePub(pub.id,pub).subscribe(res=>{
//              console.log(res);
             
//            })
           
//        }) 
 
//        let username = sessionStorage.getItem('username');
//        this.userService.getUserByEmail(username).subscribe(res => {
//          this.user = res;
      
         
//        })
      
//    });
//    }
  //   removeone(i){
  //    console.log(i);
     
  //    this.lcompetance.splice(i);
  //    console.log(this.lcompetance);
     
  //  }
 
  //  sharePub(pubid){
  //    this.pubService.getPubById(pubid).subscribe(res=>{
  //      let pub = res;
  //      console.log(pub);
       
  //      let sharedpost = new SharedPost()
  //      sharedpost.pub=pub;
  //      console.log(sharedpost);
  //      console.log(this.user.id);
       
  //      this.sharePostService.createSharedPost(sharedpost,this.user.id).subscribe(res=>{
  //        console.log("shared !! ");
  //        console.log(res);
  //        this.ngOnInit();
         
  //      })
       
  //    })
  //  }
 
   onSelectFile(file: FileList) {  
     this.fileToUpload = file.item(0);  
     var reader = new FileReader();  
     reader.onload = (event: any) => {  
         this.imageUrl = event.target.result;  
     }  
     reader.readAsDataURL(this.fileToUpload);  
 }  
//  addPost(){
//    console.log(moment());
//    let u= new User();
//    this.username = sessionStorage.getItem('username');
//    this.userService.getUserByEmail(this.username).subscribe(res => {
//      u = res;
   
//      let post = new Post() ;
    
//      console.log(u);
//    post.content=this.contentt ; 
   
//    let nn =moment().utc().toDate();
//    console.log(nn);
//    nn.setHours(nn.getHours()+1);
//    post.date=nn;
  // post.date =new Date(formatDate(now, 'M/d/yy, h:mm:ss a', 'fr-CAD'));
        
       
   // console.log(this.imageUrl);
   // console.log(this.imageUrl.toString().startsWith("data:video"));
   // console.log(this.imageUrl.toString().startsWith("data:image"));
   
  //  if(this.imageUrl!=null)
  //  {
  //   if(this.imageUrl.startsWith("data:video")){
  //     post.video=this.imageUrl;
  //     console.log(post.video);
      
  //   }
  //   if(this.imageUrl.startsWith("data:image")){
  //     post.image=this.imageUrl
  //     console.log(post.image);
      
  //   }
  //  }
   
   // let pub = new Pub();
   // pub.created_at=post.date;
   // pub.updated_at=post.date;
   // pub.post=post;
   // pub.nlike=0;
   // pub.user=this.user;
//    this.postService.createPost(post,this.user.id).subscribe(res=>{
//      console.log(res);
     
//      this.modalService.dismissAll();
//     this.ngOnInit();
    
 
//    }) ;
   
 
   
   
//    })
  
     
   
   
   
//  }
//    open(content) {
//      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'lg'}).result.then((result) => {
//        this.closeResult = `Closed with: ${result}`;
//      }, (reason) => {
//        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//      });
//    }
//    openn(content) {
//     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }
 
//    private getDismissReason(reason: any): string {
//      if (reason === ModalDismissReasons.ESC) {
//        return 'by pressing ESC';
//      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//        return 'by clicking on a backdrop';
//      } else {
//        return `with: ${reason}`;
//      }
//    }
//    addLike(pubid){
//      let u= new User();
//    this.username = sessionStorage.getItem('username');
//    this.userService.getUserByEmail(this.username).subscribe(res => {
//      u = res;
//      let like = new Like();
//      like.content="test";
//      let pub=new Pub();
//      this.pubService.getPubById(pubid).subscribe(res=>{
//       pub=res;
       
//       this.likeService.listLikeByUserPub(pubid,u.id).subscribe(res=>{
//         console.log(res);
//         this.isLiked=res;
//         if(this.isLiked!=0){
 
//          this.likeService.deleteLike(this.isLiked).subscribe(res=>{
//            console.log(res);
//            console.log("Deleting ..."+this.isLiked);
          
         
      
//          this.likeService.getLikeNumber(pubid).subscribe(res=>{
//            pub.nlike=res;
        
        
//          this.pubService.updatePub(pubid,pub).subscribe(res=>{
//            console.log("updating like ...");
//            console.log(res);
//            this.ngOnInit();
           
//          })
//        })
//      })
//         }
//     if(this.isLiked==0){
//      like.pub=pub;
//      like.user=u;
//      this.likeService.createComment(like).subscribe(res=>{
//        console.log(res);
       
     
//      this.likeService.getLikeNumber(pubid).subscribe(res=>{
//        pub.nlike=res;
    
//      this.pubService.updatePub(pubid,pub).subscribe(res=>{
//        console.log("updating like ...");
//        console.log(res);
//        this.ngOnInit();
//      })
//      })
//    })
//    }
   
//    })
//  })
 
 
//  })
//    }
 

 
//    addComment(pubid){
//      console.log("Wheeree in ");
//      let u= new User();
//      this.pubService.getPubById(pubid).subscribe(res=>{
//        let pub=res;
//    this.username = sessionStorage.getItem('username');
//    this.userService.getUserByEmail(this.username).subscribe(res => {
//      u = res;
     
//      let com=new Comment();
//      com.content=this.comm;
//      com.user=u;
//      let nn =moment().utc().toDate();
//    console.log(nn);
//    nn.setHours(nn.getHours()+1);
 
   
   
   
//    com.pub=pub;
//    this.commentService.createComment(com).subscribe(res=>{
//      console.log(res);
//      console.log(com);
     
 
//      this.ngOnInit();
    
      
//      })
     
  
   //   this.pubService.getPubById(pubid).subscribe(res=>{
   //     pub=res;
   //     console.log(pub);
   //     console.log(this.comm);
   //     console.log(com);
       
       
   //     pub.comment=com;
   //     this.pubService.updatePub(pubid,pub).subscribe(res=>{
   //       console.log(res);
   //       console.log(pub);
         
   //     })
   // })
//  })
//  })
 
//  } 
    
   
    
  }



 