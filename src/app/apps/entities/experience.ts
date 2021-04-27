import { Profile } from "./Profile";
import { TypeOffer } from "./TypeOffer";

export class Experience { 
    id: number;
    profile: Profile;
    type:TypeOffer
    company:string;
    title:string;
    description:string;
    created_at:Date;
    updated_at	:Date;
    public constructor() {
    }
}