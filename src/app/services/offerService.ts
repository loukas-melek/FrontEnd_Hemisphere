import { HttpClient, HttpEvent, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "../apps/entities/offer";

@Injectable({
    providedIn: 'root'
  })
export class OfferService {
    urlOffers = 'http://localhost:3000/offers';
    offer=new Offer();
    offers=new Array<Offer>();
   constructor(private Http: HttpClient) { }
   listOffers() {
  return this.Http.get<Offer[]>(this.urlOffers + '/list');
  }

  listfiltred(listtofilter,location,type,categorie) {
    let pa=new HttpParams();
    pa=pa.append('location',location);
    pa=pa.append('type',type);
    pa=pa.append('categorie',categorie);
    return this.Http.get(this.urlOffers + '/list',listtofilter+{params:pa});
    }

  // listOffersByUserId(user_id){
  //   return this.Http.get<Offer[]>(this.urlOffers+'/user/'+user_id);
  // }
  // listOffersByCategorie(categorie){
  //   return this.Http.get<Offer[]>(this.urlOffers+'/categorie/'+categorie);
  // }
  // listOffersByType(type){
  //   return this.Http.get<Offer[]>(this.urlOffers+'/type/'+type);
  // }
  // listOffersByLocation(location){
  //   return this.Http.get<Offer[]>(this.urlOffers+'/location/'+location);
  // }
  // listFiltredOffers(location,type,categorie){
  // let pa=new HttpParams();
  // if(location==undefined&&type==undefined&&categorie!=undefined){pa=pa.append('categorie',categorie);}
  
  // if(location!=undefined&&type==undefined&&categorie==undefined){pa=pa.append('location',location);}
  
  // if(location==undefined&&type!=undefined&&categorie==undefined){pa=pa.append('type',type);}

  // if(location!=undefined&&type==undefined&&categorie!=undefined){
  //   if(location=='All'&&categorie!='All'){pa=pa.append('categorie',categorie);}
  //   if(location!='All'&&categorie=='All'){pa=pa.append('location',location);}
  //   if(location!='All'&&categorie!='All'){pa=pa.append('categorie',categorie);pa=pa.append('location',location);}
  // } 
  // if(location!=undefined&&type!=undefined&&categorie==undefined){
  //   if(type=='All'&&location!='All'){pa=pa.append('location',location);}
  //   if(type!='All'&&location=='All'){pa=pa.append('type',type);}
  //   if(type!='All'&&location!='All'){pa=pa.append('location',location);pa=pa.append('type',type);}
  //   }
  // if(location!=undefined&&type!=undefined&&categorie!=undefined){
  //   if(type!='All'&&location=='All'&&categorie=='All'){pa=pa.append('type',type);}
  //   if(type=='All'&&location!='All'&&categorie=='All'){pa=pa.append('location',location);}
  //   if(type=='All'&&location=='All'&&categorie!='All'){pa=pa.append('categorie',categorie);}

  //   if(type!='All'&&location!='All'&&categorie=='All'){pa=pa.append('location',location);pa=pa.append('type',type);}
  //   if(type!='All'&&location=='All'&&categorie!='All'){pa=pa.append('location',type);pa=pa.append('categorie',categorie);}
  //   if(type=='All'&&location!='All'&&categorie!='All'){pa=pa.append('categorie',categorie);pa=pa.append('location',location);}
  //   if(type!='All'&&location!='All'&&categorie!='All'){pa=pa.append('location',location);pa=pa.append('type',type); pa=pa.append('categorie',categorie);}
  // }
  // if(location==undefined&&type!=undefined&&categorie!=undefined){
  //   if(type=='All'&&categorie!='All'){pa=pa.append('categorie',categorie);}
  //   if(type!='All'&&categorie=='All'){ pa=pa.append('type',type);}
  //   if(type!='All'&&categorie!='All'){ pa=pa.append('type',type);pa=pa.append('categorie',categorie);}
  //  }
  
  //   return this.Http.get<Offer[]>(this.urlOffers+'/filter',{params:pa});
  // }
  createOffer(offer,id){
    console.log("we are now in the service we will parse to the controller")
    return this.Http.post<Offer>("http://localhost:3000/offers/add/"+id, offer);
    }

//   createOffer(myform:any) {
  
//   this.offer = {
//   'title': myform.value.offerTitle,
//   'description': myform.value.offerDescription,
//   'categorie': myform.value.offerCategorie,
//   'studentNumber': myform.value.offerStudentNumber,
//   'isSupervised': myform.value.offerIsSupervised,
//   'type': myform.value.offerType,
//   'cost': myform.value.offerCost,
//   'date': myform.value.offerDate
//   }
//   return this.Http.post(this.urlOffers + '/add', this.offer);
//   }
  
  updateOffer(myObj:any) {
  
  return this.Http.put(this.urlOffers + '/' + myObj['id'], myObj);
  }
  
  
  deleteOffer(myObj:any) {
  
  return this.Http.delete(this.urlOffers + '/' + myObj['id'])
   }
// listFiltredTasks(location,categorie){
//   let pa=new HttpParams();
//   if(location==undefined&&categorie!=undefined){pa=pa.append('categorie',categorie);}
//   if(location!=undefined&&categorie==undefined){pa=pa.append('location',location);}
//   if(location!=undefined&&categorie!=undefined){pa=pa.append('location',location);pa=pa.append('categorie',categorie);}
  
  
//     return this.Http.get<Offer[]>(this.urlOffers+'/filter/tasks',{params:pa});
//   }
 getOffer(id:any){
  
    return this.Http.get<Offer>(this.urlOffers + '/' + id)
   }
//   getTasks(){
  
//     return this.Http.get<Offer[]>(this.urlOffers + '/tasks')
//    }
//    getPosts(){
  
//     return this.Http.get<Offer[]>(this.urlOffers + '/post')
//    }
  }
  