import { INewRequestViewModel } from "../models/new-request.models";
import { NewRequestService } from "../services/new-request.services";
import { IEmployee } from "../models/employee.models";
import { ITravelType } from "../models/traveltype.model";
import { IClient } from "../models/client.model";
import { IProject } from "../models/project.models";
import { Injectable } from "@angular/core";
import { Status } from "../models/status.model";
import { TravelRequest } from "../models/travel-request.model";
import { OnSubmitNewRequest } from "../models/onsubmit-newrequest.model";

import { SelectedType } from "../models/selectedType.model";
@Injectable()
export class NewRequestRepository{

    private _newRequestService : NewRequestService
    private _newRequestViewModel : INewRequestViewModel
    private _onSubmitNewRequest : OnSubmitNewRequest ;
    private 
    //private  _travelRequest :TravelRequest;

    constructor(private newRequestService  : NewRequestService,
        ){
   this._newRequestService = newRequestService
   
    this.subscribe(1); 
    this._onSubmitNewRequest = new OnSubmitNewRequest();
    // 1 -- manager Id
    }
    

    subscribe = function(id : number){
     this._newRequestService.GetNewRequest(id).subscribe((data) => {
         this._newRequestViewModel = data},error => console.log("Error: ", error))
    }

    getEmployees() : IEmployee[]{
        return this._newRequestViewModel.Employees;
    }

    getTravelTypes() : ITravelType[]{
        return this._newRequestViewModel.TravelTypes;
    }

    getClients() : IClient[]{
        return this._newRequestViewModel.Clients;
    }

    getProjects(): IProject[]{
        return this._newRequestViewModel.Projects;
    }

    getStatuses() : Status[]{
        return this._newRequestViewModel.Statuses;
    }

   onSaveClicked(travelName:string,place:string,startDate:Date,endDate:Date,client:SelectedType,project:SelectedType,travelType:SelectedType,employee:SelectedType,status:Status){
     var _travelRequest = new TravelRequest();
     _travelRequest.TravelRequestName = travelName;
     _travelRequest.Place = place;
     _travelRequest.StartDate = startDate;
     _travelRequest.EndDate = endDate;
     _travelRequest.ClientId = client.id;
     _travelRequest.ProjectId = project.id;
     _travelRequest.TravelTypeId = travelType.id;
     _travelRequest.EmployeeId = employee.id;
     _travelRequest.StatusId = status.StatusId
     this._onSubmitNewRequest.travelRequests = [];
     this._onSubmitNewRequest.travelRequests.push(_travelRequest);

     console.log("length = "+this._onSubmitNewRequest.travelRequests.length)


   }
   onSubmitClicked(){
        this._newRequestService.PostNewRequest(this._onSubmitNewRequest)
   }
   onEditClicked(travelName:string,place:string,startDate:Date,endDate:Date,client:SelectedType,project:SelectedType,travelType:SelectedType,employee:SelectedType,status:Status){
     var empFound:boolean=false;  
     this._onSubmitNewRequest.travelRequests.forEach((tr)=>{
         tr.EmployeeId == employee.id
         empFound = true;
     })
     if(empFound){
        
     }
    }
   
}