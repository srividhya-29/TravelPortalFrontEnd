

import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

 



import { INewRequestViewModel } from '../models/new-request.models';
import { OnSubmitNewRequest } from '../models/onsubmit-newrequest.model';



@Injectable({
  providedIn: 'root'
})


export class NewRequestService {

    private headers: HttpHeaders;
    private accessPointUrl: string = 'http://localhost:62512/api/Demo';
    private _newRequestViewModel : INewRequestViewModel;
  
    constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
  
    public GetNewRequest(id: number) : Observable<INewRequestViewModel> {
     let api = this.accessPointUrl +'?id=' + id;
      return this.http.get<INewRequestViewModel>(api);
    }
      
    public PostNewRequest(output: OnSubmitNewRequest){
      
       let api = this.accessPointUrl;
      // return this.http.post(api,output);
     return this.http.post(api,output)
    .subscribe(
      data=>{
        alert("Post is success");
      },
     error => {
       alert("Error");
     }
      
    );
    }
  }
  