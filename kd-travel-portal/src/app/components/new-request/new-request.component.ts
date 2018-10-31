import { Component,Output } from '@angular/core';
import { NewRequestRepository } from '../../repository/new-request.repository';
import { SelectedType } from '../../models/selectedType.model';
import { TravelRequest } from '../../models/travel-request.model';
import {Location} from '@angular/common';


import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Status } from '../../models/status.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { FormGroupName, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'new-request',
    templateUrl: './new-request.component.html',
    //styleUrls: ['./main.component.css']
  })

  export class NewRequestComponent{
  // //  private _newRequestRepo : NewRequestRepository
        
        private _newRequestRepo : NewRequestRepository
        public  _selectedType: SelectedType[] = [];
        public _travelTypes: SelectedType[] = []
        public _projects: SelectedType[]=[];
        public _clients: SelectedType[] = [];
        public client: SelectedType
        public project: SelectedType
        public travelType: SelectedType
        public employee: SelectedType
        public place:string;
        public startDate :Date;
        public endDate:Date;
        public travelName:string;
        public RequestApproved : boolean = false;
        public status : Status;
        public flag:boolean = false;
        public editFalg:boolean = true;
        public disableDropDown:boolean=false;
        public newRequestForm;
        public fb:FormBuilder;
        
        //public statusType : string;
        constructor(private newRequestRepo : NewRequestRepository,private _location: Location){
          this._newRequestRepo = newRequestRepo;
          this._selectedType = new Array<SelectedType>();
          this._travelTypes = new Array<SelectedType>();
          this.client = new SelectedType();
          this.project = new SelectedType();
          this.travelType = new SelectedType();
          this.employee = new SelectedType();
          this.status = new Status;
         
          
          

         }
         getDropDownType(){
         
         // if(document.getElementById("emp").innerHTML == "Employee:"){
         
           var  temp2 = this._newRequestRepo.getEmployees();
            var l = temp2.length;
           
            for(var i=0;i< l;i++){
              this._selectedType[i]={
                id:  temp2[i].EmployeeId,
                name : temp2[i].EmployeeName
              }
      
            }
          
          //}
               
        }
         
      onEmployeeClicked(employee : SelectedType){
        this.employee.id = employee.id;
        this.employee.name = employee.name;

      }

        getTravelTypes(){
          
          //if(document.getElementById("travelType").innerHTML == "Travel Type:"){
           
          
            var temp1 = this._newRequestRepo.getTravelTypes();
            var l = temp1.length;
           
            for(var i=0;i< l;i++){
              this._travelTypes[i]={
                id:  temp1[i].TravelTypeId,
                name : temp1[i].Type
              } 
            }
         // }

        }

        onTravelTypesClicked(travelType: SelectedType){
          this.travelType.id = travelType.id;
          this.travelType.name = travelType.name;
        }

        getProjects(){
          var temp1 = this._newRequestRepo.getProjects();
            var l = temp1.length;
           
            for(var i=0;i< l;i++){
              this._projects[i]={
                id:  temp1[i].ProjectId,
                name : temp1[i].ProjectName
              } 
            }

        }

        onProjectClicked(project: SelectedType){
          this.project.id = project.id;
          this.project.name =project.name;
         }

        getClients(){
          var temp1 = this._newRequestRepo.getClients();
          var l = temp1.length;
         
          for(var i=0;i< l;i++){
            this._clients[i]={
              id:  temp1[i].ClientId,
              name : temp1[i].ClientName
            } 
          }

        }

        onClientClicked(client: SelectedType){
         this.client.id = client.id;
         this.client.name =client.name;
        }

        get StatusType():string{
          var sta = this._newRequestRepo.getStatuses()
          if(this.RequestApproved == false){
            for(var s of sta)  {
             if(s.StatusId == 1){
               this.status = s 
              return s.Message;
              
             }
              
            }
          }
          else{
            for(var s of sta)  {
              if(s.StatusId == 2){
                this.status = s;
               return s.Message;
              }
               
             }

          }
         return 
        }

        onSubmitClicked(){
          if(this.flag == true){
            this._newRequestRepo.onSubmitClicked();
          }
          else{
            window.alert("plaese Add the request before submitting it")
          }

        }
        
        onSave(travelName,place,startDate,endDate){
        
          this.flag = true;
          this.editFalg = false;
          this.travelName = travelName;
          this.place = place;
          this.startDate = startDate;
          this.endDate = endDate;
          console.log("in component save")

            this._newRequestRepo.onSaveClicked(this.travelName,this.place,this.startDate,this.endDate,this.client,this.project,this.travelType,this.employee,this.status)
         

        }
        refresh():void{
          this._location.back();
          window.location.reload();
        }

       
    
      
  }