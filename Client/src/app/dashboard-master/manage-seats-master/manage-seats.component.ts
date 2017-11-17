import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'manage-seats',
  templateUrl: './manage-seats.component.html',
  styleUrls: ['./manage-seats.component.css']
})
export class ManageSeatsComponent implements OnInit {

  source: LocalDataSource;

  public constructor() {

  }

   public ngOnInit():void {
    
  }

  data = [
    {
      locationName: "Greater noida",
      status: "Yes",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "Tower A",
      floorName: "G Floor",
      seatType: "totalVacantSeats",
      seatCapacity: 135
    },
    {
      locationName: "Noida",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "Tower B",
      floorName: "1st Floor",
      seatType: "totalSeats",
      seatCapacity: 151
    },
    {
      locationName: "Gurgaon",
      status: "Yes",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "Tower C",
      floorName: "2nd Floor",
      seatType: "openAllocatedSeats",
      seatCapacity: 20
    },
    {
      locationName: "Mumbai",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "Tower D",
      floorName: "3rd Floor",
      seatType: "openVacantSeats",
      seatCapacity: 20
    },
    {
      locationName: "Chennai",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "Tapasaya",
      floorName: "2nd Floor",
      seatType: "closedOccupiedSeats",
      seatCapacity: 20
    },
    {
      locationName: "Bangalore",
      status: "Yes",
      csoOwner: "Ravindra",
      regionEntity: "NTL",
      buildingName: "bang",
      floorName: "G Floor",
      seatType: "closedOccupiedSeats",
      seatCapacity: 20
    },
    {
      locationName: "Kolkata",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "hydara",
      floorName: "G Floor" ,
      seatType: "abvSeats",
      seatCapacity: 20
    },
    {
      locationName: "Pune",
      status: "Yes",
      csoOwner: "Dinesh",
      regionEntity: "NTL",
      buildingName: "kola",
      floorName: "G Floor",
      seatType: "abvSeats",
      seatCapacity: 20
    },
    {
      locationName: "Delhi",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "mumb",
      floorName: "G Floor",
      seatType: "abvSeats",
      seatCapacity: 20
    },
    {
      locationName: "Hyderabad",
      status: "Yes",
      csoOwner: "Ravindra",
      regionEntity: "NTL",
      buildingName: "chain",
      floorName: "G Floor",
      seatType: "abvSeats",
      seatCapacity: 20
    },
    {
      locationName: "Dubai",
      status: "No",
      csoOwner: "Vikas",
      regionEntity: "NTL",
      buildingName: "gun",
      floorName: "G Floor",
      seatType: "openVacantSeats",
      seatCapacity: 20
    },
    {
      locationName: "Dubai",
      status: "Yes",
      csoOwner: "Dinesh",
      regionEntity: "NTL",
      buildingName: "Tower A",
      floorName: "G Floor",
      seatType: "openVacantSeats",
      seatCapacity: 20
    },
 
  ];

  settings = {
    actions: {
    delete: false,
 
  },
  add: {
    confirmCreate: true,
    addButtonContent: '<i class="fa fa-plus-square fa-lg" aria-hidden="true"></i>',
    createButtonContent: '<i class="fa fa-floppy-o" aria-hidden="true"></i></br>',
    cancelButtonContent: '<i class="fa fa-times" aria-hidden="true"></i>',
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>',
    saveButtonContent: '<i class="fa fa-floppy-o" aria-hidden="true"></i></br>',
    cancelButtonContent: '<i class="fa fa-times" aria-hidden="true"></i>',
  },
    columns: {
      locationName: {
        title: 'Location',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: this.data[0].locationName, title: this.data[0].locationName },{ value: this.data[1].locationName, title: this.data[1].locationName },{ value: this.data[2].locationName, title: this.data[2].locationName },{ value: this.data[3].locationName, title: this.data[3].locationName },{ value: this.data[4].locationName, title: this.data[4].locationName },{ value: this.data[5].locationName, title: this.data[5].locationName },{ value: this.data[6].locationName, title: this.data[6].locationName }],
          },
        },
      },
      csoOwner: {
        title: 'CSO Owner',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: this.data[0].csoOwner, title: this.data[0].csoOwner },{ value: this.data[1].csoOwner, title: this.data[1].csoOwner },{ value: this.data[2].csoOwner, title: this.data[2].csoOwner },{ value: this.data[3].csoOwner, title: this.data[3].csoOwner },{ value: this.data[4].csoOwner, title: this.data[4].csoOwner },{ value: this.data[5].csoOwner, title: this.data[5].csoOwner },{ value: this.data[6].csoOwner, title: this.data[6].csoOwner }],
          },
        },
      },
      regionEntity: {
        title: 'Region Entity',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: "NTL", title:"NTL"  },{ value: "ESRI", title:"ESRI"  },{ value: "NES", title:"NES"  },{ value: "ICS", title:"ICS"  }],
          },
        },
      },
      buildingName: {
        title: 'Building Name',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: this.data[0].buildingName, title: this.data[0].buildingName },{ value: this.data[1].buildingName, title: this.data[1].buildingName },{ value: this.data[2].buildingName, title: this.data[2].buildingName },{ value: this.data[3].buildingName, title: this.data[3].buildingName },{ value: this.data[4].buildingName, title: this.data[4].buildingName },{ value: this.data[5].buildingName, title: this.data[5].buildingName },{ value: this.data[6].buildingName, title: this.data[6].buildingName }],
          },
        },
      },
     floorName: {
        title: 'Floor Name',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: this.data[0].floorName, title: this.data[0].floorName },{ value: this.data[1].floorName, title: this.data[1].floorName },{ value: this.data[2].floorName, title: this.data[2].floorName },{ value: this.data[3].floorName, title: this.data[3].floorName },{ value: this.data[4].floorName, title: this.data[4].floorName },{ value: this.data[5].floorName, title: this.data[5].floorName },{ value: this.data[6].floorName, title: this.data[6].floorName }],
          },
        },
      },
      seatType: {
        title: 'Seat Category',
        type:'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: "Total", title:"Total"  },{ value: "TotalVacant", title:"Total Vacant"  },{ value: "OpenVacant", title:"Open Vacant"  },{ value: "OpenAllocated", title:"Open Allocated"  },{ value: "Closed Occupied", title:"Closed Occupied"  },{ value: "ABV", title:"ABV"  }],
          },
        }
      },
      seatCapacity: {
        title: 'Seat Capacity',
      },
      status: {
        title: 'Status',
        editor: {
          type: 'list',
          config: {
            list: [{ value: "Yes", title:"Yes"  },{ value: "No", title:"No"  }],
          },
        },
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear',
          },
        },
      },
    }
  }
    
  
  
   
 
   
     onDeleteConfirm(event) {
       if (window.confirm('Are you sure you want to delete?')) {
         event.confirm.resolve();
       } else {
         event.confirm.reject();
       }
     }
   
     onSaveConfirm(event) {
      if(isNaN(event.newData['seatCapacity']))
        {
          window.alert('Please enter number only..');
        }
        else {
       if (window.confirm('Are you sure you want to save?')) {
         event.newData['name'] += ' + added in code';
         event.confirm.resolve(event.newData);
       } else {
         event.confirm.reject();
       }
      }
     }
   
     onCreateConfirm(event) {
       if(isNaN(event.newData['seatCapacity']))
        {
          window.alert('Please enter number only..');
        }
        else {
       if (window.confirm('Are you sure you want to create?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
        } else {
          event.confirm.reject();
        }
     }
    }
  }
    



  

