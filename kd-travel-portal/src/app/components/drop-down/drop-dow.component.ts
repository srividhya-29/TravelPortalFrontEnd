import { Component, Input, Injectable, Output } from '@angular/core';
import { NewRequestRepository } from '../../repository/new-request.repository';
import { IEmployee } from '../../models/employee.models';
import { IClient } from '../../models/client.model';
import { ITravelType } from '../../models/traveltype.model';
import { IProject } from '../../models/project.models';
import { SelectedType } from '../../models/selectedType.model';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'drop-down',
    templateUrl: './drop-down.component.html',
    //styleUrls: ['./main.component.css']
  })
  
  @Injectable()
  export class DropDownComponent{
  @Input() public x : SelectedType[]
  @Input() public saveFlag: boolean
 
  @Output() public selectedType  = new EventEmitter();
  public value: string;
  public expanded : Boolean = false;
 
  
    private _newRequestRepo : NewRequestRepository
    
    constructor(private newRequestRepo : NewRequestRepository){
     this._newRequestRepo = newRequestRepo;
     console.log("am getting called")
     this.value = "Select"
     this.expanded = false;
    
     //this._attributeType  = new Array<SelectedType>()
     
    }
    toggleDropdown(dbtn: any){
        
        dbtn.classList.toggle("kx-dropdown--show");
       // this.expanded = true;
        
        //this.getDropDownType()
     }

    
     selectedItem(item,dbtn: any){
        
      this.toggleDropdown(dbtn);
      this.value = item.name;
      this.selectedType.emit(item);
      this.expanded = true;
     }
     
    //  getDropDownType(){
    //    if(this.type == "employees"){
    //     this.attributeType =  this._newRequestRepo.getEmployees();
    //    }
    //  }
    //  getemployees() : IEmployee[] {
    //   return this._newRequestRepo.getEmployees();
    //      }
   
   

//     get clients() : Client[]{
//      return this._newRequestRepo.getClients();
//     }

//     get travelTypes() : TravelType[]{
//       return this._newRequestRepo.getTravelTypes();
//     }

//     get projects(): Project[]{
//       return this._newRequestRepo.getProjects();
//     }
   }