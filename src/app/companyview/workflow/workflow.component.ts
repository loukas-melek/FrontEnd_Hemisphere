import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { Sprint } from '../../apps/entities/sprint';
import { SprintDto } from '../../apps/entities/SprintDto';
import { Task } from '../../apps/entities/Task';
import { SprintService } from '../../services/SprintSerivce';
import { Sprint_TaskService } from '../../services/TaskService';
import {DatePipe} from '@angular/common';
import { TaskDto } from '../../apps/entities/TaskDto';

@Component({
  selector: 'ngx-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  
  edit: FormGroup;

  sprint:SprintDto[];
  tasks:Task[];
  sprints:Sprint;
  sprintTodo:SprintDto[];
  sprintDone:SprintDto[];
  sprintDoing:SprintDto[];
  closeResult: string;
  
  
  description;type;dateD=new Date();dateF=new Date();duration;priority;
  oneSprint: SprintDto;
  onetask: TaskDto;
  
 
constructor(public datepipe: DatePipe,private route:ActivatedRoute,private fb: FormBuilder,private modalService: NgbModal,private SprintSer:SprintService,private Sprint_TaskSer:Sprint_TaskService){
  this.sprint= [ ];
  this.tasks= [ ];
  this.sprintDoing= [ ]; 
  this.sprintTodo= [ ]; 
  this.sprintDone= [ ]; 
 this.sprints = new Sprint();
 
 this.ListSprint();

}


LoadSprint(){
  this.sprintDone= [ ]; 
  this.sprintTodo= [ ]; 
  this.sprintDoing= [ ]; 

  this.sprint.forEach((e,ind) => {
    e.sprintsTask.forEach(t => {
      if(t.status=="TODO")
        {
          let test = 0;
          this.sprintTodo.forEach((s , index)=> 
          {
            if(s.sprint_id==e.sprint_id)
            {
              let test1 = 0;
              
              s.sprintsTask.forEach(ss => 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintTodo[index].sprintsTask.push(t);   
              }
              test = 1
            }   
          
          }); 
          if (test == 0)
          {
            let spr = new SprintDto() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.sprintsTask=[];
            spr.sprintsTask.push(t);
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
              s.sprintsTask.forEach(ss => 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintDoing[index].sprintsTask.push(t); 
              }
              test = 1
            }  
          }); 
          if (test == 0)
          {
            let spr = new SprintDto() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.sprintsTask=[];
            spr.sprintsTask.push(t);
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
              s.sprintsTask.forEach((ss , index)=> 
              {
                if(ss.task_id==t.task_id)
                {
                  test1 = 1;
                }   
              }); 
              if(test1==0)
              {
                this.sprintDone[index].sprintsTask.push(t); 
              }
              test = 1
            }   
            
          }); 
          if (test == 0)
          {
            let spr = new SprintDto() ;
            spr.sprint_id = e.sprint_id ;
            spr.description = e.description ;
            spr.sprintsTask=[];
            spr.sprintsTask.push(t);
            this.sprintDone.push(spr);
          }
        } 
    });
    if(e.sprintsTask.length==0)
    {
      this.sprintTodo.push(e);
    }
  });  
  console.log("all:",this.sprint);
  console.log("Todo:",this.sprintTodo);
  console.log("Doing:",this.sprintDoing);
  console.log("Done:",this.sprintDone);
}
Toggletodo(id){
  console.log(id);
  this.sprintTodo.forEach(s => 
    {
      if(s.sprint_id==id)
      {
        s.toggle=!s.toggle;
        console.log(s.toggle);
      }
    }); 
}
Toggledoing(id){
  console.log(id);
  this.sprintDoing.forEach(s => 
    {
      if(s.sprint_id==id)
      {
        s.toggle=!s.toggle;
        console.log(s.toggle);
      }
    }); 
}
Toggledone(id){
  console.log(id);
  this.sprintDone.forEach(s => 
    {
      if(s.sprint_id==id)
      {
        s.toggle=!s.toggle;
        console.log(s.toggle);
      }
    }); 
}
ListSprint(){
  this.sprint= [ ];
  this.SprintSer.listSprintByProjectID(this.route.snapshot.params['id']).subscribe(res=>{
   
    
   
        this.sprint=res
        console.log("all:",this.sprint);
        this.LoadSprint();
    
}); 
 
}

  ngOnInit(): void {
   
    this.ListSprint();
    this.edit = this.fb.group({
      sprint_id:[''],
     });
    
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
            e.sprintsTask.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="DOING";
                  let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                  console.log(task.end_date);
                  console.log(task.start_date);
                  
                  this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
                } 
            });
          }); 
        }
        if(event.container.id=="sprintTodo")
        {
          console.log('task doing > todo');

          this.sprint.forEach((e,index) => {
            e.sprintsTask.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="TODO";
                  let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  console.log("ntestewwa");
                  
                  console.log(e.sprint_id);
                  task.sprint.sprint_id=e.sprint_id;
                  console.log("el id te3na");
                  
                  console.log(task.sprint.sprint_id);
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                  this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
                } 
            });
          });       
        }
        console.log(event.container.id,this.tasks[event.previousIndex].status);
        if(this.tasks[event.previousIndex].status=="DONE")
        {
          console.log('task done > doing');

          this.sprint.forEach((e,index) => {
            e.sprintsTask.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  t.status="DOING";
                  let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  console.log('push');
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                  this.Sprint_TaskSer.updatetask(task).subscribe(res=>{console.log(res);
                  });
                } 
            });
          });   
        }
        if(event.container.id=="sprintDone")
        {
          console.log('task doing > done');

          this.sprint.forEach((e,index) => {
            e.sprintsTask.forEach((t,indexx) => {
              if(t.task_id==this.tasks[event.previousIndex].task_id)
                {
                  console.log('push');
                  t.status="DONE";
                  let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                  this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
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
          e.sprintsTask.forEach((t,indexx) => {
            if(t.status=="TODO")
            {
              t.status="DOING";
              let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                  console.log(t.start_date);
                  console.log(task.start_date);
                  
              this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
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
          e.sprintsTask.forEach((t,indexx) => {
            if(t.status=="DOING")
            {
              t.status="TODO";
              let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
              this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
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
          e.sprintsTask.forEach((t,indexx) => {
            
            if(t.status=="DOING")
            { 
              t.status="DONE";
              let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
              this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
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
          e.sprintsTask.forEach((t,indexx) => {
            if(t.status=="DONE")
            { 
              t.status="DOING";
              let task= new Task();
                  task.description=t.description
                  task.duration=t.duration
                  task.is_done=t.is_done
                  task.priority=t.priority
                  task.status=t.status;
                  task.task_id=t.task_id;
                  task.task_type=t.task_type;
                  task.sprint.sprint_id=e.sprint_id;
                  task.start_date=t.start_date;
                  task.end_date=t.end_date;
                this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
            }
                
          });
        }
        });  
      }

      }

      }
      this.LoadSprint()
  }
 
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openModal(targetModal, sprint_id:number) {
    
    
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
   console.log(sprint_id);
   
    this.edit.patchValue({
      sprint_id:sprint_id,
    });
   }
   openModalAfficheSprint(targetModal, sprint_id:number) {
    
    
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
   console.log(sprint_id);
   
   this.SprintSer.getSprintByID(sprint_id).subscribe(res=>{
    this.oneSprint=res;
    console.log(this.oneSprint);
    
  })
   }
   openModalAfficheTask(targetModal, task_id:number) {
    
    
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
   console.log(task_id);
   
   this.Sprint_TaskSer.gettaskById(task_id).subscribe(res=>{
    this.onetask=res;
    console.log(this.onetask);
    
  })
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
  getSprintByid(id){
    this.SprintSer.getSprintByID(id).subscribe(res=>{
      this.oneSprint=res;
      console.log(this.oneSprint);
      
    })
  }
  CreateSprint() {
    let sprint=new Sprint();
    sprint.description=this.description;
    sprint.project.project_id=this.route.snapshot.params['id'];
    sprint.sprint_type=this.type;
    console.log(this.dateD);
    console.log(this.dateF);
    let start =moment(this.dateD);
    let end =moment(this.dateF);
  
      let s = new NgbDate(start.year(),start.month(),start.date()+1);
      console.log(s);
      let e=new NgbDate(end.year(),end.month(),end.date()+1);
     console.log(e);
     
      
    sprint.start_date=new Date(s.year,s.month,s.day);
    console.log(sprint.start_date);
    sprint.end_date=new Date(e.year,e.month,e.day);;
    sprint.status="TODO";
    console.log("we start to create sprint and this is the value");
    console.log(sprint);
    this.SprintSer.createSprint(sprint).subscribe(
      res=>{
        console.log(res);
        
       
      }
    )
    this.modalService.dismissAll();
    this.ngOnInit();
    }

    CreateTask() {
      console.log( this.edit.getRawValue());
      let task=new Task();
     
      let sprint_id=this.edit.getRawValue();
      console.log("bottimiboin",sprint_id);
      console.log(sprint_id);
      
      task.description=this.description;
      task.sprint=sprint_id;
      task.duration=this.duration;
      task.priority=this.priority
      task.task_type=this.type;
      task.status="TODO";
      //sprint.start_date=this.dateD;
      //sprint.end_date=this.dateF;
     
      console.log("we start to create task and this is the value");
      console.log(task);
      this.Sprint_TaskSer.createTask(task).subscribe(
        res=>{
          console.log(res);
          
          
        }
      )
      this.modalService.dismissAll();
      this.ngOnInit();
      }

}


