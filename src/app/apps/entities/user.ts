import { Role } from "./Role";


export class User { 
    id: number;
    username: string;
    email: string;
    password: string;
    roles=new Array<Role>();
   
}