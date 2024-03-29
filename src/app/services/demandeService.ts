import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Demande } from "../apps/entities/demande";

@Injectable({
    providedIn: 'root'
  })
  export class DemandeService {
    url = 'http://54.37.155.0:3000/demandes';
    
    demande: Demande;
   
   constructor(private Http: HttpClient) { }
   listDemandes() {
    return this.Http.get<any[]>(this.url + '/list');
    }
    create(data) {
      console.log(data);
      
      return this.Http.post<Demande>(this.url+"/add", data);
    }
    updateDemande(id,demande:Demande){
      return this.Http.put<Demande>(this.url+"/update/"+id,demande);
    }
    listDemandesByUserId(user_id){
      return this.Http.get<any[]>(this.url + '/list/user/'+user_id);
    }
    listDemandeByPostId(id){
      return this.Http.get<Demande[]>(this.url + '/list/'+id);
    }
    listDemandeByTaskId(task_id){
      return this.Http.get<any[]>(this.url + '/list/task/'+task_id);
    }
    treatDemande(id,status){
      return this.Http.post(this.url+'/treat/'+id,status);
    }
    // createDemande(user:User,date:Date,motivation:any) {
  
    //        this.demande = {
    //       'date': date,
    //       'user': user,
    //       'motivation':motivation
    //       //'categorie': myform.value.offerCategorie,
    //     //   'studentNumber': myform.value.offerStudentNumber,
    //     //   'isSupervised': myform.value.offerIsSupervised,
    //     //   'type': myform.value.offerType,
    //     //   'cost': myform.value.offerCost,
    //     //   'date': myform.value.offerDate
    //       }
    //       console.log(this.demande);
    //       return this.Http.post(this.url + '/add', this.demande);
    //       }
          deleteOffer(id) {
  
              return this.Http.delete(this.url + '/delete/' +id)
                }  
                // getOffer(id:any) {
  
                //     return this.Http.get(this.url + '/' + id)
                //    }
                //   }
  }