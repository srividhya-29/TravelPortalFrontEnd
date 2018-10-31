
import { Injectable } from "@angular/core";
import { IEmployee } from "./employee.models";
import { IClient } from "./client.model";
import { ITravelType } from "./traveltype.model";
import { IProject } from "./project.models";
import { Status } from "./status.model";


export interface INewRequestViewModel
    {
      
        
       
    
          Employees: IEmployee[],
          Clients : IClient[],
          TravelTypes : ITravelType[],
          Projects : IProject[],
          Statuses : Status[],
    
               

    }