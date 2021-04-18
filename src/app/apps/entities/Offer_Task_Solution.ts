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
    TypeOffer:TypeOffer
    cost: number;
    poste:string;
    ipath:string;
    location:LocationsOffer;
    competance:Competance
    public constructor() {
     
     
     }
  }
  