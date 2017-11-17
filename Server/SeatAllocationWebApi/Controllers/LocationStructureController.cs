using Microsoft.AspNetCore.Mvc;
using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Services;
using System;
using System.Collections.Generic;

namespace SeatAllocationWebApi.Controllers
{
    [Route("api/[controller]")]
    public class LocationStructureController : Controller
    {
        public ILocationStructureServices _services;
        public LocationStructureController(ILocationStructureServices services)
        {
            _services = services;
        }
        // GET api/LocationStructure
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
              List<  LocationStructure> list = _services.GetAll();
                if (list.Count != 0)
                {
                    return Ok(list);
                }
                else
                {
                    return StatusCode(404);
                }

            }
            catch
            {

                return StatusCode(500);
            }
        }

        // GET api/LocationStructure/5
        [HttpGet("{locationCode}")]
        public IActionResult Get(string locationCode)
        {


            try
            {
                LocationStructure list = _services.Getid(locationCode);
                if (list.LocationCode!=null)
                {
                    return Ok(list);
                }
                else
                {
                    return StatusCode(404);
                }

            }
            catch
            {

                return StatusCode(500);
            }
           
        }

        // POST api/LocationStructure
        [HttpPost]
        public IActionResult Post([FromBody]LocationStructure locationStructure)
        {
            try
            {
                if (locationStructure!=null)
                {
                    _services.Add(locationStructure);
                    return Ok("Ok");
                }
                else
                {
                    return StatusCode(404);

                }
                
            }
            catch (Exception)
            {

                return StatusCode(500);
            }
            
        }

        // PUT api/LocationStructure/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]LocationStructure value)
        {
            try
            {
                if (id != null && value!=null)
                {
                    _services.Update(id, value);
                    return Ok("Ok");
                }
                else
                {
                    return StatusCode(404);

                }

            }
            catch (Exception)
            {

                return StatusCode(500);
            }
        
        }

      //  DELETE api/LocationStructure/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                if (id != null )//&& value != null)
                {
                    _services.delete(id);
                    return Ok("Ok");
                }
                else
                {
                    return StatusCode(404);

                }

            }
            catch (Exception)
            {

                return StatusCode(500);
            }
           
        }

    }
}
