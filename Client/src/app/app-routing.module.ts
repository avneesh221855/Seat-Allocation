import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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





const routes: Routes=[
// {path:'',redirectTo:'/app-sidenav',pathMatch:'Full'},



{path:'app-dashboard-cso',component:DashboardCSOComponent,
children:[
{ path:'app-home',component:HomeComponent},
    {path:'app-cso-user',component:CsoUserComponent},
     { path:'app-history-CSO',component:HistoryCsoComponent},
{path:'app-current-allocation',component:CurrentAllocationComponent},
]
},


  {path:'app-dashboard-master',component:DashboardMasterComponent,
  children:[
    {path:'location-structure',component:LocationStructureComponent},
    {path:'add-floor',component:AddFloorComponent},
    {path:'add-building',component:AddBuildingComponent}


  ]
},

  {path:'app-dashboard-authority',component:DashboardAuthorityComponent,
  children:[
 {path:'app-history',component:HistoryAuthorityComponent},
   	{ path:'app-home',component:HomeComponent},



  ]},

{path:'app-login',component:LoginComponent},
  {path:'app-sidenav',component:SidenavComponent,
  	children:[
  	{ path:'app-home',component:HomeComponent},
  	 { path:'app-currentcllocation',component:CurrentcllocationComponent},
  {path:'request-form',component:RequestFormComponent}
  	]
  },

 { path:'app-user-request',component:UserRequestComponent},

 {path:'manage-seats',component:ManageSeatsComponent},
 //{path:'request-form',component:RequestFormComponent},
  {path:'app-requests-authority',component:RequestAuthorityComponent},


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
  export class AppRoutingModule {}