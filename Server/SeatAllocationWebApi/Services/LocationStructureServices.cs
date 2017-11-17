
using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Services
{

    public interface ILocationStructureServices
    {

        void Add(LocationStructure res);
        List<LocationStructure> GetAll();
        LocationStructure Getid(string id);
        LocationStructure GetByCsoOwner(int csoOwnerCode);
        void delete(string id);
        void Update(string id, LocationStructure res);

    }
    public class LocationStructureServices: ILocationStructureServices
    {
        public ILocationStructureRepository _repository;
        public LocationStructureServices(ILocationStructureRepository repository)
        {
            _repository = repository;
        }
        public void Add(LocationStructure res)
        {
            _repository.Add(res);
        }

        public void delete(string id)
        {
            _repository.Delete(id);
        }

        public List<LocationStructure> GetAll()
        {
            return _repository.GetAll();
        }

        public LocationStructure GetByCsoOwner(int csoOwnerCode)
        {
           return  _repository.GetByCsoOwner(csoOwnerCode);
        }

        public LocationStructure Getid(string id)
        {
            return _repository.Getid(id);
        }

        public void Update(string id, LocationStructure res)
        {
            _repository.Update(id, res);
        }
    }
}
