
// import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
// import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { SprintDto } from '../../apps/entities/SprintDto';
// import { Task } from '../../apps/entities/task';
// import { SprintService } from '../../services/SprintSerivce';
// import { Sprint_TaskService } from '../../services/TaskService';
// import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
// import { Observable, Subject } from 'rxjs';
// import { colors } from '../../apps/utils/colors';
// import { map } from 'rxjs/operators';

// import {
//   isSameMonth,
//   isSameDay,
//   startOfMonth,
//   endOfMonth,
//   startOfWeek,
//   endOfWeek,
//   startOfDay,
//   endOfDay,
//   format,
//   addHours,
//   addDays,
//   subDays,
// } from 'date-fns';
// import { HttpClient, HttpParams } from '@angular/common/http';
// interface Film {
//   id: number;
//   title: string;
//   release_date: string;
// }

// function getTimezoneOffsetString(date: Date): string {
//   const timezoneOffset = date.getTimezoneOffset();
//   const hoursOffset = String(
//     Math.floor(Math.abs(timezoneOffset / 60))
//   ).padStart(2, '0');
//   const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
//   const direction = timezoneOffset > 0 ? '-' : '+';

//   return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
// }

// @Component({
//   selector: 'ngx-cal',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: './cal.component.html',
//   styles: [
//     `
//       .fill-height {
//         flex: 1;
//         display: flex;
//         flex-direction: column;
//         align-items: stretch;
//       }
//     `,
//   ],
// })
// export class CalComponent implements OnInit {
//   priorities=["BLOCKER","HIGH","MEDIUM","LOW","MINOR"];
//   priority;sum;edate:Date;sdate:Date;description;
//   sprint:SprintDto[];
//   tasks:Task[];
//   ngOnInit(): void {
//     this.fetchEvents();

//   }
//   @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

//   view: CalendarView = CalendarView.Month;

//   viewDate: Date = new Date();


//   refresh: Subject<any> = new Subject();

//   events$: Observable<CalendarEvent<{ film: Film }>[]>;

//   activeDayIsOpen: boolean = false;

//   modalData: {
//     action: string;
//     event: CalendarEvent;
//   };
//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fas fa-fw fa-pencil-alt"></i>',
//       a11yLabel: 'Edit',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edited', event);
//       },
//     },
//     {
//       label: '<i class="fas fa-fw fa-trash-alt"></i>',
//       a11yLabel: 'Delete',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter((iEvent) => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       },
//     },
//   ];
//   // events: CalendarEvent[] = [
//   //   {
//   //     start: subDays(startOfDay(new Date()), 1),
//   //     end: addDays(new Date(), 1),
//   //     title: 'A 3 day event',
//   //     color: colors.red,
//   //     actions: this.actions,
//   //     allDay: true,
//   //     resizable: {
//   //       beforeStart: true,
//   //       afterEnd: true,
//   //     },
//   //     draggable: true,
//   //   },
//   //   {
//   //     start: startOfDay(new Date()),
//   //     title: 'An event with no end date',
//   //     color: colors.yellow,
//   //     actions: this.actions,
//   //   },
//   //   {
//   //     start: subDays(endOfMonth(new Date()), 3),
//   //     end: addDays(endOfMonth(new Date()), 3),
//   //     title: 'A long event that spans 2 months',
//   //     color: colors.blue,
//   //     allDay: true,
//   //   },
//   //   {
//   //     start: addHours(startOfDay(new Date()), 2),
//   //     end: addHours(new Date(), 2),
//   //     title: 'A draggable and resizable event',
//   //     color: colors.yellow,
//   //     actions: this.actions,
//   //     resizable: {
//   //       beforeStart: true,
//   //       afterEnd: true,
//   //     },
//   //     draggable: true,
//   //   },
//   // ];
 
  
//   constructor(private http: HttpClient,private modal: NgbModal,private SprintSer:SprintService,private Sprint_TaskSer:Sprint_TaskService) {
//     this.ListSprint();
//     this.refresh.next();
//   }
//   ListSprint(){
//     this.sprint= [ ];
//     this.SprintSer.listSprintByProjectID(7).subscribe(res=>{
//           this.sprint=res
//           console.log("all:",this.sprint);
//           this.LoadTask();
//           this.LoadEvent();
//   }); 
//   }
//   LoadTask(){
//     this.tasks= [ ]; 

//     this.sprint.forEach(e => {
//       e.sprintsTask.forEach(t => {
//         let task= new Task();
//         task.description=t.description
//         task.duration=t.duration
//         task.is_done=t.is_done
//         task.priority=t.priority
//         task.status=t.status;
//         task.task_id=t.task_id;
//         task.task_type=t.task_type;
//         task.sprint.sprint_id=e.sprint_id;
//         task.start_date=t.start_date;
//         task.end_date=t.end_date;
//         this.tasks.push(task);
//       });
//     });
//     console.log("Tasks:",this.tasks);
//   }
//   LoadEvent(){
//     this.events= [ ]; 

//     this.tasks.forEach(t => {
//       this.events = [
//         ...this.events,
//         {
//           title: t.description,
//           start:new Date(t.start_date),
//           id:t.task_id,
//           ids:t.sprint.sprint_id,
//           end:new Date(t.end_date),
//           color: colors.red,
//           //allDay: true,
//           draggable: true,
//           actions: this.actions,
//           resizable: {
//             beforeStart: true,
//             afterEnd: true,
//           },
//         },
//       ];
//     });
//     console.log("Events:",this.events);
//     return this.events;
//   }
//   events: CalendarEvent[] ;
//   addEvent(date: Date): void {
//     this.events = [
//       ...this.events,
//       {
//         title: 'New Task',
//         start: startOfDay(date),
//         end: endOfDay(date),
//         color: colors.red,
//         draggable: true,
//         actions: this.actions,
//         resizable: {
//           beforeStart: true,
//           afterEnd: true,
//         },
//       },
//     ];
//     this.refresh.next();
//   }
//   fetchEvents(): void {
//     const getStart: any = {
//       month: startOfMonth,
//       week: startOfWeek,
//       day: startOfDay,
//     }[this.view];

//     const getEnd: any = {
//       month: endOfMonth,
//       week: endOfWeek,
//       day: endOfDay,
//     }[this.view];

//     const params = new HttpParams()
//       .set(
//         'primary_release_date.gte',
//         format(getStart(this.viewDate), 'yyyy-MM-dd')
//       )
//       .set(
//         'primary_release_date.lte',
//         format(getEnd(this.viewDate), 'yyyy-MM-dd')
//       )
//       .set('api_key', '0ec33936a68018857d727958dca1424f');

//     this.events$ = this.http
//       .get('https://api.themoviedb.org/3/discover/movie', { params })
//       .pipe(
//         map(({ results }: { results: Film[] }) => {
//           return results.map((film: Film) => {
//             return {
//               title: film.title,
//               start: new Date(
//                 film.release_date + getTimezoneOffsetString(this.viewDate)
//               ),
//               color: colors.yellow,
//               allDay: true,
//               meta: {
//                 film,
//               },
//             };
//           });
//         })
//       );
//   }
//   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//     if (isSameMonth(date, this.viewDate)) {
//       if (
//         (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//         events.length === 0
//       ) {
//         this.activeDayIsOpen = false;
//       } else {
//         this.activeDayIsOpen = true;
//       }
//       this.viewDate = date;
//     }
//   }
//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd,
//   }: CalendarEventTimesChangedEvent): void {
//     this.events = this.events.map((iEvent) => {
//       if (iEvent === event) {
//         return {
//           ...event,
//           start: newStart,
//           end: newEnd,
//         };
//       }
//       return iEvent;
//     });
//     this.handleEvent('Dropped or resized', event);
//   }

//   handleEvent(action: string, event: CalendarEvent): void {
//     this.modalData = { event, action };
//     this.modal.open(this.modalContent, { size: 'lg' });
//   }
// }

