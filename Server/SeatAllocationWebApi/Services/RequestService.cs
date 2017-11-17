using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Repository;

namespace SeatAllocationWebApi.Services
{
    public interface IRequestService
    {
        IEnumerable<Request> GetByCso(int csoOwner);
        void Add(Request request);
        List<Request> GetAll();
        void Update(int id, Request res);
        void Delete(int id);
        IEnumerable<Request> getByRequestedBy(string requestedBy);

    }
    public class RequestService : IRequestService
    {
        ILocationStructureRepository _locationStructureRepository;
        IRequestRepository _requestRepository;
        public RequestService(ILocationStructureRepository locationStructureRepository,
                              IRequestRepository requestRepository
                              )
        {
            _locationStructureRepository = locationStructureRepository;
            _requestRepository = requestRepository;
        }

        public void Add(Request request)
        {
           
            _requestRepository.Add(request);
        }

        public IEnumerable<Request> GetByCso(int csoOwner)
        {

            LocationStructure location = _locationStructureRepository.GetByCsoOwner(csoOwner);
            return _requestRepository.getByLocationCode(location.LocationCode);

        }

        public List<Request> GetAll()
        {
           return _requestRepository.GetAll();
        }

        public void Update(int id, Request res)
        {
            _requestRepository.Update(id, res);
        }


        public void Delete(int id)
        {
            _requestRepository.Delete(id);
        }

        public IEnumerable<Request> getByRequestedBy(string requestedBy)
        {
            return _requestRepository.getByRequestedBy(requestedBy);
        }
    }
}
