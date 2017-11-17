using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Model
{
    public class Request
    {
        [Key]
        public int RequestId { get; set; }

        public string RequestedBy { set; get; }

        [ForeignKey("ApprovingAuthority")]
        public string EmpCode { get; set; }

        public string CcCode { get; set; }

        public string Entity { get; set; }

        //ForeignKey don't forget to turn off cascade 
        [ForeignKey("FloorStructure")]
        public int FloorCode { get; set; }
        public FloorStructure FloorStructures { set; get; }

        [ForeignKey("BuildingStructure")]
        public string BuildingCode { get; set; }

        [ForeignKey("LocationStructure")]
        public string LocationCode { set; get; }


        public string Status { get; set; }

        public int NoOfseats { get; set; }

        public int CurrentAllocatedseats { set; get; }

        public List<RequestRelease> RequestReleases {set; get;}

        public string Justification { get; set; }

        public DateTime ApprovedOn { get; set; }

        public DateTime RequestedOn { get; set; }

        public DateTime ToDate { get; set; }


    }
}
