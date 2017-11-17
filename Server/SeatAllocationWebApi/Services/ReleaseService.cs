using SeatAllocationWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Services
{
    public interface IReleaseService
    {

        void GetAll();
    }
    public class ReleaseService : IReleaseService
    {
        private IReleaseRepository _releaseRepo;
        public ReleaseService(IReleaseRepository releaseRepo)
        {
            _releaseRepo = releaseRepo;
        }
        public void GetAll()
        {
            _releaseRepo.GetAll();
        }
    }
}
