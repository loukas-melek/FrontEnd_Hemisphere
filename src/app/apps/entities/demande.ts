import { OfferTaskSolution } from "./Offer_Task_Solution";
import { Profile } from "./Profile";


export class Demande { 
    id: number;
    profile: Profile;
    motivation:string;
    offer_Task_Solution:OfferTaskSolution;
    bidprice:number;
    deliverytime:string;
    isvalide:boolean;
    public constructor() {
    }
}