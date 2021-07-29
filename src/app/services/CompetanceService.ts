import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Competance } from "../apps/entities/Competance";

@Injectable({
    providedIn: 'root'
  })
  export class CompetanceService {
    url = 'http://54.37.155.0:3000/competance';

    constructor(private Http: HttpClient) { }
    listCompetances() {
     return this.Http.get<any[]>(this.url + '/list');
     }
        createCompetance(competance,id){
            return this.Http.post<Competance>(this.url+'/add/'+id,competance)
        }
        getCompetancesByOfferId(id): Observable<any>{
            return this.Http.get(this.url +"/list/competances/"+ id);
        }
        getOffersByCompetanceId(competance_id):Observable<any>{
            return this.Http.get(this.url +"/list/offers/" +competance_id);
        }
  }