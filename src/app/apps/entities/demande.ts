import { GeneralPost } from "./General_Post";
import { OfferTaskSolution } from "./Offer_Task_Solution";
import { Profile } from "./Profile";


export class Demande { 
    id: number;
    profile: Profile;
    motivation:string;
    generalpost:GeneralPost;
    bidprice:number;
    deliverytime:string;
    isvalide:boolean;
    status:number;
    public constructor() {
    }
}