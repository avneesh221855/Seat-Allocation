using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Model
{
    public class RequestRelease
    {
        [Key]
        public int ReleaseId { get; set; }

        [ForeignKey("Request")]
        public int RequestId { get; set; }

        public Request Requests { get; set; }

        public DateTime ReleasedOn { get; set; }

        public int NoOfseatsReleased { get; set; }
    }
}
