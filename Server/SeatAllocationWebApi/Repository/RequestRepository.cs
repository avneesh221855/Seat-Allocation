using Microsoft.EntityFrameworkCore;
using SeatAllocationWebApi.Model;
using System.Collections.Generic;
using System.Linq;

namespace SeatAllocationWebApi.Repository
{
    public interface IRequestRepository
    {

        void Add(Request res);
        List<Request> GetAll();
        IEnumerable<Request> getByLocationCode(string locationCode);
        Request Getid(int id);
        void Delete(int id);
        void Update(int id, Request res);
        IEnumerable<Request> getByRequestedBy(string requestedBy);
    }
    public class RequestRepository : IRequestRepository
    {
        public SeatAllocationSystemDatabase _context;
        public RequestRepository(SeatAllocationSystemDatabase context)
        {
            _context = context;
        }
        public void Add(Request res)
        {
            _context.Requests.Add(res);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            Request data = _context.Requests.FirstOrDefault(m => m.RequestId == id);
            data.Status = "rejected";
            _context.SaveChanges();
        }


        public List<Request> GetAll()
        {
            return _context.Requests.ToList();
        }

        public IEnumerable<Request> getByLocationCode(string locationCode)
        {
            return _context.Requests.Include(r =>r.FloorStructures).Where(r => r.LocationCode == locationCode && r.Status.ToLower().Equals("forwarded"));
        }

        public Request Getid(int id)
        {
            Request data = _context.Requests.FirstOrDefault(m => m.RequestId == id);
            return data;
        }

        public IEnumerable<Request> getByRequestedBy(string requestedBy)
        {
            return _context.Requests.Include(r => r.FloorStructures).ThenInclude(f=>f.BuildingStructures).Where(r => r.RequestedBy == requestedBy);
        }

        public void Update(int id, Request res)
        {
            Request data = _context.Requests.FirstOrDefault(m => m.RequestId == id);
          
            data.Justification = res.Justification;
            data.NoOfseats = res.NoOfseats;
            data.Status = res.Status;
            _context.SaveChanges();
        }
    }
}
