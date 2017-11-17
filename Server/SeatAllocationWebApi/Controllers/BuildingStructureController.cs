using Microsoft.AspNetCore.Mvc;
using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Services;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;

namespace SeatAllocationWebApi.Controllers
{
    [Produces("application/json")]
    public class BuildingStructureController : Controller
    {
        private IBuildingStructureServices _services;
        public BuildingStructureController(IBuildingStructureServices services)
        {
            _services = services;
        }
        // GET api/BuildingStructure
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            try
            {
                var buildingService = _services.GetAll();
                if (buildingService.Count != 0)
                {
                     
                    return Ok(_services.GetAll());
                }
                else
                {
                    return StatusCode(204);
                }
            }

            catch (TimeoutException ex)
            {
                return StatusCode(102);
            }
            catch (Exception ex)
            {
                return NotFound("Not found result");
            }
        }
        // GET api/BuildingStructure/Get/5
        [HttpGet]
        [Route("api/[controller]/Get/{id}")]
        
        public IActionResult Get(string id)
        {
            try
            {
                _services.Getid(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Error");
            }

        }

        // GET api/BuildingStructure/GetByLocationId/5
        [HttpGet]
        [Route("api/[controller]/GetByLocationId/{id}")]
        public IActionResult GetByLocationId(string id)
        {
            try
            {
                // _services.GetByLocationId(id);
                return Ok(_services.GetByLocationId(id));
            }
            catch
            {
                return BadRequest();
            }

        }
        // POST api/BuildingStructure
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post([FromBody]BuildingStructure value)
        {
            try
            {
                _services.Add(value);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
        // PUT api/BuildingStructure/5
        [HttpPut]
        [Route("api/[controller]/{id}")]
        public IActionResult Put(string id, [FromBody]BuildingStructure value)
        {
            try
            {
                _services.Update(id, value);
                return Ok("Updated Successfully");
            }
            catch (System.Exception)
            {

                return BadRequest();
            }

        }

        // DELETE api/BuildingStructure/5
        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                if (id != null)
                {
                    _services.Delete(id);
                    return Ok("Deletd Successfully");
                }
                else
                {
                    return NotFound();
                }
            }
            catch (System.Exception)
            {
                return BadRequest();
            }

        }
      

    }
}
