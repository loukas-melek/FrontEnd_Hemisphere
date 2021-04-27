import { CdkDrag, CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { debounce } from "@agentepsilon/decko";
import { Sprint } from '../../apps/entities/sprint';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../apps/entities/Task';
import { SprintService } from '../../services/SprintSerivce';
import { Sprint_TaskService } from '../../services/TaskService';
import { Project } from '../../apps/entities/project';


@Component({
  selector: 'ngx-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  private subscription: Subscription;
  public dateNow = new Date();
  public dDay = new Date('May 5 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  sprint:Sprint[];
  tasks:Task[];
  sprints:Sprint;
  sprintTodo:Sprint[];
  sprintDone:Sprint[];
  sprintDoing:Sprint[];
  closeResult: string;

  
  
 
constructor(private modalService: NgbModal,private SprintSer:SprintService,private Sprint_TaskSer:Sprint_TaskService){
  this.sprint= [ ];
  this.tasks= [ ];
  this.sprintDoing= [ ]; 
  this.sprintTodo= [ ]; 
  this.sprintDone= [ ]; 
 this.sprints = new Sprint();
 this.ListSprint();

}



CreateSprint(){
  
  
  this.sprintDone= [ ]; 
  this.sprintTodo= [ ]; 
  this.sprintDoing= [ ]; 

  
  this.sprint.forEach((e,ind) => {
    
    e.Sprint_Task.forEach(t => {
      if(t.status=="TODO")
        {
          let test = 0;
          this.sprintTodo.forEach((s , index)=> 
          {
            if(s.sprint_id==e.sprint_id)
            {
              let test1 = 0;
              s.Sprint_Task.forEach(ss => 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintTodo[index].Sprint_Task.push(t);   
              }
              test = 1
            }   
          
          }); 
          if (test == 0)
          {
            let spr = new Sprint() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.Sprint_Task=[];
            spr.Sprint_Task.push(t);
            this.sprintTodo.push(spr);

          }
        }

        if(t.status=="DOING")
        {
          let test = 0;
          this.sprintDoing.forEach((s , index)=> 
          {
            if(s.sprint_id==e.sprint_id)
            {
              let test1 = 0;
              s.Sprint_Task.forEach(ss => 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintDoing[index].Sprint_Task.push(t); 
              }
              test = 1
            }  
          }); 
          if (test == 0)
          {
            let spr = new Sprint() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.Sprint_Task=[];
            spr.Sprint_Task.push(t);
            this.sprintDoing.push(spr);
          }
        }

        if(t.status=="DONE")
        {
          let test = 0;

          this.sprintDone.forEach((s , index)=> 
          {
            if(s.sprint_id==e.sprint_id)
            {
              let test1 = 0;
              s.Sprint_Task.forEach((ss , index)=> 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintDone[index].Sprint_Task.push(t); 
              }
              test = 1
            }   
            
          }); 
          if (test == 0)
          {
            let spr = new Sprint() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.Sprint_Task=[];
            spr.Sprint_Task.push(t);
            this.sprintDone.push(spr);
          }
        } 
    });
  });  
  console.log("all:",this.sprint);
  console.log("Todo:",this.sprintTodo);
  console.log("Doing:",this.sprintDoing);
  console.log("Done:",this.sprintDone);
}
ListSprint(){
  this.sprint= [ ];

  this.SprintSer.getall().subscribe(res=>{
     let project=new Array <Project>()
    project=res
    console.log(project);
    
    project.forEach(e => {
      this.sprint=e.sprints
      console.log("all:",this.sprint);
      });  
    // let project=new Array <Project>()
    // project=res
    // this.sprint = project[0].sprintsTask;
     console.log(res);
     
  
 
 
}); 
  // this.SprintSer.listSprint().subscribe(res=>{
  //    this.sprint = res;
  //    this.sprint.forEach(e => {
      
  //     this.Sprint_TaskSer.listSprint_TaskBySprint(e.sprint_id).subscribe(t=>{
  //     e.Sprint_Task=t;  
  //     });   
  // });  
  
//   console.log("all:",this.sprint);
// }); 
 
}

  ngOnInit(): void {
    this.CreateSprint();

    
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      console.log('same container');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      if(event.previousContainer.data[event.previousIndex].sprint_id==null)
      {
       this.tasks=event.previousContainer.data;
        console.log('drag task'+this.tasks[event.previousIndex]);    

        if(this.tasks[event.previousIndex].status=="TODO")
        {
          console.log('task todo > doing');
          this.sprint.forEach((e,index) => {
            e.Sprint_Task.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="DOING";
                  this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
                } 
            });
          }); 
        }
        if(event.container.id=="sprintTodo")
        {
          console.log('task doing > todo');

          this.sprint.forEach((e,index) => {
            e.Sprint_Task.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="TODO";
                  this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
                } 
            });
          });       
        }
        console.log(event.container.id,this.tasks[event.previousIndex].status);
        if(this.tasks[event.previousIndex].status=="DONE")
        {
          console.log('task done > doing');

          this.sprint.forEach((e,index) => {
            e.Sprint_Task.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="DOING";
                  this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
                } 
            });
          });   
        }
        if(event.container.id=="sprintDone")
        {
          console.log('task doing > done');

          this.sprint.forEach((e,index) => {
            e.Sprint_Task.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="DONE";
                  this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
                } 
            });
          });       
        }
        
        
      }
    
      else{
        this.sprints=new Sprint();
        this.sprints=event.previousContainer.data[event.previousIndex];
        console.log('container to container');
        if(event.previousContainer.id=="sprintTodo")
        {
          console.log('sprint todo > doing');
        this.sprint.forEach((e,index) => {
          if(e.sprint_id==this.sprints.sprint_id)
          {
          e.Sprint_Task.forEach((t,indexx) => {
            if(t.status=="TODO")
            {
              t.status="DOING";
              this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
            }
             
          });
        }
        });  
      }
      if(event.container.id=="sprintTodo")
        {
          console.log('sprint doing > todo');
        this.sprint.forEach((e,index) => {
          if(e.sprint_id==this.sprints.sprint_id)
          {
          e.Sprint_Task.forEach((t,indexx) => {
            if(t.status=="DOING")
            {
              t.status="TODO";
              this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
            }
                
          });
        }
        });  
      }
      if(event.container.id=="sprintDone")
        {
          console.log('sprint doing > done');
        this.sprint.forEach((e,index) => {
          if(e.sprint_id==this.sprints.sprint_id)
          {
          e.Sprint_Task.forEach((t,indexx) => {
            
            if(t.status=="DOING")
            { 
              t.status="DONE";
              this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
            }
          });
        }
        });  
      }
      if(event.previousContainer.id=="sprintDone")
        {
          console.log('sprint done > doing');
        this.sprint.forEach((e,index) => {
          if(e.sprint_id==this.sprints.sprint_id)
          {
          e.Sprint_Task.forEach((t,indexx) => {
            if(t.status=="DONE")
            { 
              t.status="DOING";
                this.Sprint_TaskSer.updatetask(t).subscribe(res=>{});
            }
                
          });
        }
        });  
      }

      }

      }
      this.CreateSprint();
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

