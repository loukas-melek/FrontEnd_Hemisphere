import { HttpClient, HttpEvent, HttpParams,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GeneralPost } from "../apps/entities/General_Post";
import { OfferTaskSolution } from "../apps/entities/Offer_Task_Solution";
import { TokenStorageService } from "../auth/authentication/services/token-storage.service";

@Injectable({
    providedIn: 'root'
  })

export class OfferService {
    urlOffers = 'http://localhost:3000/offers';
    offer=new OfferTaskSolution();
    offers=new Array<OfferTaskSolution>();
    headers: HttpHeaders;

   constructor(private Http: HttpClient) { }
   listOfferTaskSolution() {
return this.Http.get<OfferTaskSolution[]>(this.urlOffers + '/list');
}
 
  // listfiltred(listtofilter,location,type,categorie) {
  //   let pa=new HttpParams();
  //   pa=pa.append('location',location);
  //   pa=pa.append('type',type);
  //   pa=pa.append('categorie',categorie);
  //   return this.Http.get(this.urlOffers + '/list',listtofilter+{params:pa});
  //   }

  createOfferTaskSolution(offer,id){
    console.log("we are now in the service we will parse to the controller")
    return this.Http.post<OfferTaskSolution>("http://localhost:3000/offers/add/"+id, offer);
    }


  
  updateOfferTaskSolution(myObj:any) {
  
  return this.Http.put(this.urlOffers + '/' + myObj['id'], myObj);
  }
  
  
  deleteOfferTaskSolution(myObj:any) {
  
  return this.Http.delete(this.urlOffers + '/' + myObj['id'])
   }

 getOfferTaskSolution(id:any){
  
    return this.Http.get<OfferTaskSolution>(this.urlOffers + '/' + id)
   }

  }
  