import { Role } from "./role";

export class User { 
    id: number;
    name:string;
    fullName: string;
    email: string;
    password: string;
    role: Role;
    lastName: string;
    image:string
    usertype:string;
    rememberMe:number;
    confirmPassword:string;
// public constructor() {
// this.id=-2;
// this.role=new Role();
// this.name="";
// this.email="";
// this.lastName="";
// this.password="";
// }
}