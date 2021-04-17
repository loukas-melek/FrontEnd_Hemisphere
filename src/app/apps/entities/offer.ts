import { Competance } from "./Competance";
import { User } from "./user";

export class Offer { 
    id: number;
    title: string;
    description: string;
    categorie: string;
    studentNumber: number;
    isSupervised: number;
    type: string;
    cost: number;
    date: Date;
    poste:string;
    cname:string;
    ipath:string;
    location:string;
    competance:Competance
    public constructor() {
     
     
     }
  }
  