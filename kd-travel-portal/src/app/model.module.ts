import { NewRequestService } from "./services/new-request.services";
import { NewRequestRepository } from "./repository/new-request.repository";

import { NgModule } from "@angular/core";
import { Status } from "./models/status.model";
import { TravelRequest } from "./models/travel-request.model";
import { OnSubmitNewRequest } from "./models/onsubmit-newrequest.model";

@NgModule({
    imports: [],
    providers: [NewRequestService, NewRequestRepository,Status,TravelRequest,OnSubmitNewRequest]
     
  })
  export class ModelModule { }