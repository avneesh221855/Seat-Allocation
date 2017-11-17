using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Repository;
using System.Collections.Generic;

namespace SeatAllocationWebApi.Services
{
    public interface IBuildingStructureServices
    {

        void Add(BuildingStructure res);
        List<BuildingStructure> GetAll();
        BuildingStructure Getid(string id);
        void Delete(string id);
        void Update(string id, BuildingStructure res);
        IEnumerable<BuildingStructure> GetByLocationId(string id);


    }
    public class BuildingStructureServices : IBuildingStructureServices
    {
        public IBuildingStructureRepository _repository;
        public BuildingStructureServices(IBuildingStructureRepository repository)
        {
            _repository = repository;
        }
        public void Add(BuildingStructure res)
        {
            _repository.Add(res);
        }
        public void Delete(string id)
        {
            _repository.Delete(id);
        }
        public List<BuildingStructure> GetAll()
        {
            return _repository.GetAll();
        }

        public IEnumerable<BuildingStructure> GetByLocationId(string id)
        {
          return _repository.GetByLocationId(id);
        }

        public BuildingStructure Getid(string id)
        {
            return _repository.Get(id);
        }
        public void Update(string id, BuildingStructure res)
        {
            _repository.Update(id,res);
        }
    }
}
