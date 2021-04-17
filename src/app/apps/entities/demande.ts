import { Offer } from "./offer";
import { Task } from "./Task";
import { User } from "./user";

export class Demande { 
    id: number;
    date: Date;
    user: User;
    motivation:string;
    offer:Offer;
    task:Task;
    bidprice:number;
    deliverytime:string;
 
    public constructor() {
     
        this.date=new Date();
        this.motivation="";
        this.bidprice=0;
        this.deliverytime="";
     
    }
}