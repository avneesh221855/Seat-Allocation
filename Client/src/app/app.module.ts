import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes}from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import{AppRoutingModule} from'./app-routing.module';
import{FormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';

import{CurrentcllocationComponent}from './dashboard-bu/current-status-bu/currentcllocation.component';
import{UserRequestComponent}from './user-request/user-request.component';
import{HistoryCsoComponent} from'./dashboard-cso/history-table-cso/history-table.component';
import{HistoryAuthorityComponent} from'./dashboard-authority/history-table-authority/history.component';
import{ManageSeatsComponent}from './dashboard-master/manage-seats-master/manage-seats.component';
import{RequestFormComponent} from './dashboard-bu/request-form-bu/request-form.component';
import{RequestAuthorityComponent}from './dashboard-authority/requests-authority/request-authority.component';
import{CsoUserComponent} from './dashboard-cso/cso-user/cso-user.component';
import{AddBuildingComponent}from './dashboard-master/add-building-master/add-building.component'
import{AddFloorComponent} from './dashboard-master/add-floor-master/add-floor.component';
import{LocationStructureComponent} from './dashboard-master/location-structure-master/location-structure.component';
import{HomeComponent} from './shared/component/home/home.component';
import{CurrentAllocationComponent} from './dashboard-cso/current-allocation-cso/current-allocation.component';
import{DashboardCSOComponent}from'./dashboard-cso/dashboard-cso.component';
import{SidenavComponent}from'./dashboard-bu/sidenav.component';
import{DashboardMasterComponent}from'./dashboard-master/dashboard-master.component';
import{DashboardAuthorityComponent}from'./dashboard-authority/dashboard-authority.component';
import {LoginComponent} from './shared/component/login/login.component';


import{ApprovingAuthorityService} from './shared/services/approving-authority.service';
import{CsoUserService}from'./shared/services/cso-user.service';
import{AddBuildingService} from './shared/services/add-building.service';
import{AddFloorService} from './shared/services/add-floor.service';
import{LocationStructureService} from'./shared/services/location-structure.service';
import{CcCodeService} from './shared/services/cc-code.service';
import{EntityService}from './shared/services/entity.service';
import{RequestService} from './shared/services/request.service';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardCSOComponent,
    DashboardAuthorityComponent,
    CurrentcllocationComponent,
    UserRequestComponent,
    HistoryCsoComponent,
    DashboardMasterComponent,
    HistoryAuthorityComponent,
    ManageSeatsComponent,
    RequestFormComponent,
    RequestAuthorityComponent,
    CsoUserComponent,
    AddBuildingComponent,
    AddFloorComponent,
    LocationStructureComponent,
    HomeComponent,
    CurrentAllocationComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    FormsModule,
    ChartsModule,AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [ApprovingAuthorityService,CsoUserService,AddBuildingService,AddFloorService,LocationStructureService,CcCodeService,EntityService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
