using SeatAllocationWebApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Repository
{
    public interface IReleaseRepository
    {
        void GetAll();

    }
    public class ReleaseRepository : IReleaseRepository
    {
        private SeatAllocationSystemDatabase _context;
        public ReleaseRepository(SeatAllocationSystemDatabase context)
        {
            _context = context;
        }
        public void GetAll()
        {
            _context.RequestReleases.ToList();

        }
    }
}
