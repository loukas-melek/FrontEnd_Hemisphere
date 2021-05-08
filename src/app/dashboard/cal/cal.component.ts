import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { promises } from 'dns';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { ProjectDto } from '../../apps/entities/ProjectDto';
import { SprintDto } from '../../apps/entities/SprintDto';
import { Task } from '../../apps/entities/Task';
import { TaskDto } from '../../apps/entities/TaskDto';
import { SprintService } from '../../services/SprintSerivce';
import { Sprint_TaskService } from '../../services/TaskService';
@Component({
  selector: 'ngx-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
  appointmentDataFields: any
  views: string[] | any[]
  dataAdapter: any
  resources:any
  date: any
  @ViewChild('scheduler', { static: false }) myScheduler: jqxSchedulerComponent;
  source: { dataType: string; dataFields: { name: string; type: string; }[]; id: string; localData: any[]; };
  constructor(private SprintSer:SprintService,private Sprint_TaskSer:Sprint_TaskService){
}

mySchedulerOnAppointmentDelete(event: any): void {
  let appointment = event.args.appointment;
  //this.Sprint_TaskSerdelete(event.args.appointment.id).subscribe(res=>{});

  
};
mySchedulerOnAppointmentAdd(event: any): void {
  let appointment = event.args.appointment;
  console.log('appointmentAdd is raised') ;
  let task= new Task();
  task.description=event.args.appointment.subject;
  task.duration=2;
  task.is_done=null;
  task.priority=event.args.appointment.description;
  task.status="TODO";
  task.task_type=null;
  console.log(event.args.appointment);
  this.sprint.forEach(e => {
    if(e.description==event.args.appointment.resourceId)
        {
          task.sprint.sprint_id=e.sprint_id;
        } 
  }); 

  this.Sprint_TaskSer.createTask(task).subscribe(res=>{});
  
};
mySchedulerOnAppointmentDoubleClick(event: any): void {
  let appointment = event.args.appointment;
  console.log('appointmentDoubleclic is raised') ;

};
mySchedulerOnAppointmentChange(event: any): void {
  let appointment = event.args.appointment;
  console.log('appointmentChange is raised',event,event.args.appointment) ;
  this.sprint.forEach(e => {
    e.sprintsTask.forEach(t => {
      if(t.task_id==event.args.appointment.id)
        {
          let task= new Task();
          task.description=event.args.appointment.subject;
          task.duration=t.duration;
          task.is_done=t.is_done;
          task.priority=event.args.appointment.description;
          task.status=t.status;
          task.task_id=t.task_id;
          task.task_type=t.task_type;
          task.sprint.sprint_id=e.sprint_id;

          this.Sprint_TaskSer.updatetask(task).subscribe(res=>{});
        } 
    });
  }); 
};
mySchedulerOnCellClick(event: any): void {
  let cell = event.args.cell;
  console.log('appointmentClic is raised') ;
};
  ngOnInit(): void {
    this.myview()
  }
  editDialogCreate = (dialog, fields, editAppointment) => {
    if(fields)
    {
    // hide repeat option
    fields.repeatContainer.hide();
    // hide status option
    fields.statusContainer.hide();
    // hide timeZone option
    fields.timeZoneContainer.hide();
    // hide color option
    fields.colorContainer.hide();
    fields.subjectLabel.html("Description");
    fields.fromLabel.html("Start");
    fields.toLabel.html("End");
    fields.repeatLabel.hide();
    fields.locationContainer.hide();
    fields.descriptionLabel.html("Priority");
    fields.resourceLabel.html("Sprint");
    let buttonElement = document.createElement("BUTTON");
    buttonElement.innerText = 'Print';
    buttonElement.style.cssFloat = 'right';
    buttonElement.style.marginLeft = '5px';
    buttonElement.id = 'PrintButton';
    fields.buttons[0].appendChild(buttonElement);
    let printButton: jqwidgets.jqxButton = jqwidgets.createInstance('#PrintButton', 'jqxButton', {
        width: 50,
        height: 25
    });
    this.printButton = printButton;
    printButton.addEventHandler('click', function () {
        let appointment = editAppointment;
        if (!appointment && printButton.disabled) {
            return;
        }
        let appointmentContent =
            "<table class='printTable'>" +
            "<tr>" +
            "<td class='label'>Title</td>" +
            "<td>" + fields.subject.val() + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='label'>Start</td>" +
            "<td>" + fields.from.val() + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='label'>End</td>" +
            "<td>" + fields.to.val() + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='label'>Where</td>" +
            "<td>" + fields.location.val() + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='label'>Calendar</td>" +
            "<td>" + fields.resource.val() + "</td>" +
            "</tr>"
            + "</table>";
        let newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '<head>\n' +
                '<meta charset="utf-8" />\n' +
                '<title>jQWidgets Scheduler</title>\n' +
                '<style>\n' +
                '.printTable {\n' +
                'border-color: #aaa;\n' +
                '}\n' +
                '.printTable .label {\n' +
                'font-weight: bold;\n' +
                '}\n' +
                '.printTable td{\n' +
                'padding: 4px 3px;\n' +
                'border: 1px solid #DDD;\n' +
                'vertical-align: top;\n' +
                '}\n' +
                '</style>' +
                '</head>\n' +
                '<body>\n' + appointmentContent + '\n</body>\n</html>';
        try {
            document.write(pageContent);
            document.close();
        }
        catch (error) {
        }
        newWindow.print();
    });
    }  
};
/**
* called when the dialog is opened. Returning true as a result disables the built-in handler.
* @param {Object} dialog - jqxWindow's jQuery object.
* @param {Object} fields - Object with all widgets inside the dialog.
* @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
*/
printButton: any = null;
editDialogOpen = (dialog, fields, editAppointment) => {
    if (!editAppointment && this.printButton) {
        this.printButton.setOptions({ disabled: true });
    }
    else if (editAppointment && this.printButton) {
        this.printButton.setOptions({ disabled: false });
    }
};
/**
* called when the dialog is closed.
* @param {Object} dialog - jqxWindow's jQuery object.
* @param {Object} fields - Object with all widgets inside the dialog.
* @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
*/
editDialogClose = (dialog, fields, editAppointment) => {
};
/**
* called when a key is pressed while the dialog is on focus. Returning true or false as a result disables the built-in keyDown handler.
* @param {Object} dialog - jqxWindow's jQuery object.
* @param {Object} fields - Object with all widgets inside the dialog.
* @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
* @param {jQuery.Event Object} the keyDown event.
*/
editDialogKeyDown = (dialog?, fields?, editAppointment?) => {
};
  sprint=new Array<SprintDto>(); 
  tasks=new Array<TaskDto>();
    appointments = new Array<any>();

     Tasks(){
        this.tasks= [ ] ;
        this.sprint= [ ] ;
        //this.appointments= [ ] ;
        this.SprintSer.getall()
        .subscribe(res=>{
            let project=new Array();
           project=res
           console.log(project);
           
           project.forEach(p => {
             if(p.project_id==7)
             {
                this.sprint= p.sprints;
                console.log("list sprints :",this.sprint);
                console.log(p.sprints);
                
                p.sprints.forEach(s => {
                    s.sprintsTask.forEach(t => {
                      console.log(t);
                      
                        this.tasks.push(t);
                        let appointment = {
                          id: "",
                          description: '',
                          location: '',
                          priority:"",
                          subject: '',
                          sprint: '',
                          start: new Date(2020, 10, 25, 15, 0, 0),
                          end: new Date(2020, 10, 25, 17, 0, 0)
                      }
 
                      appointment.id=t.task_id;
                      appointment.location=s.sprint_id;
                      appointment.subject=t.description;
                      appointment.description=t.priority;
                      appointment.sprint=s.description;
                      appointment.start=new Date(2020, 10, 23, 9, 0, 0);
                      appointment.end=new Date(2020, 10, 23, 16, 0, 0);
                       this.appointments.push(appointment);
                        }); 
                    });  
                    console.log("list tasks",this.tasks);
                    
    
                   
             }
             });     
    }); 

    }
  ngAfterViewInit() {
      this.myScheduler.ensureAppointmentVisible('id1');
  }
getWidth() : any {
  if (document.body.offsetWidth < 800) {
    return '90%';
  }
  
  return 800;
}

    
myview(){
  this.Tasks();
  console.log(this.appointments);
  
  this.date = new jqx.date(2020, 11, 23);
  this.source =
  {
      dataType: 'array',
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'subject', type: 'string' },
          { name: 'sprint', type: 'string' },
          { name: 'start', type: 'date' },
          { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: this.appointments
  };
 this.dataAdapter= new jqx.dataAdapter(this.source);
 this.resources =
  {
      colorScheme: 'scheme05',
      dataField: 'sprint',
      source: new jqx.dataAdapter(this.source)
  };
 this.appointmentDataFields=
  {
      from: 'start',
      to: 'end',
      id: 'id',
      description: 'description',
      location: 'location',
      subject: 'subject',
      resourceId: 'sprint'
  };
 this.views =
  [
      'dayView',
      'weekView',
      'monthView',
      'agendaView'
  ];
  // this.ngOnInit()
}
 
}
