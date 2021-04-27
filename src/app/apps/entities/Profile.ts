import { Project } from "./project";
import { User } from "./user";

export class Profile { 
    id: number;
    about: string;
    profilePicUrl:string;
    gender:boolean;
    location:string;
    interests:string;
    languages:string;
    user:User;
    email:string;
    name:string;
    lastname:string;
    phone:string;
    city:string;
    created_at:Date;
    updated_at:Date;
    state:string;
    public constructor() {
     
     
     }
  }