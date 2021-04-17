import { Competance } from "./Competance";
import { User } from "./user";

export class Task { 
    id: number;
    title: string;
    description: string;
    categorie: string;
    isSupervised: number;
    cost: number;
    date: Date;
    location:string;
    competance:Competance
    public constructor() {
     
     
     }
  }
  