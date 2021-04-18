import { User } from "./user";

export class Profile { 
    id: number;
    about: string;
    date: Date;
    profilePicUrl:string;
    gender:boolean;
    location:string;
    interests:string;
    languages:string;
    user:User;
    
    public constructor() {
     
     
     }
  }