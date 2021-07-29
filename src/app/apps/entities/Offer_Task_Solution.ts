import { CategorieOffer } from "./CategorieOffer";
import { Competance } from "./Competance";
import { LocationsOffer } from "./LocationsOffer";
import { TypeOffer } from "./TypeOffer";


export class OfferTaskSolution { 
    id: number;
    title: string;
    description: string;
    categorie: CategorieOffer;
    studentNumber: number;
    isSupervised: number;
    type: number;
    offer_type:TypeOffer
    cost: number;
    poste:string;
    image:string;
    location:LocationsOffer;
    competance:Competance
    public constructor() {
     
     
     }
  }
  