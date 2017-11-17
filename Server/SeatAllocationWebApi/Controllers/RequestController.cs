using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SeatAllocationWebApi.Services;
using SeatAllocationWebApi.Model;

namespace SeatAllocationWebApi.Controllers
{
    [Produces("application/json")]
    public class RequestController : Controller
    {
        private IRequestService _requestService;
        public RequestController(IRequestService requestService)
        {
            _requestService = requestService;
        }
        // GET: api/Request
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            {
                try
                {
                    var reqService = _requestService.GetAll();
                    if (reqService != null)
                    {
                        return Ok(reqService);
                    }
                    else
                    {
                        return NoContent();
                    }
                }
                catch
                {
                    return StatusCode(500);
                }

            }      }


        // GET api/Request/Get/{csoOwnerCode}
        [HttpGet]
        [Route("api/[controller]/Get/{csoOwner}")]
        public IActionResult Get(int csoOwner)
        {
            
            try
            {
                return Ok(_requestService.GetByCso(csoOwner));// returns a response code of 200
            }
            catch
            {
                return StatusCode(500);// returns a reponse code of 500
            }
        }

        // GET api/Request/GetByRequestedBy/{requestedByEmpCode}
        [HttpGet]
        [Route("api/[controller]/GetByRequestedBy/{requestedBy}")]
        public IActionResult GetByRequestedBy(string requestedBy)
        {
           
            try
            {
                var requests = _requestService.getByRequestedBy(requestedBy);
                if (requests.Count()!=0)
                {
                    return Ok(requests);// returns a response code 200
                }
                else
                {
                    return NotFound();// returns a response code 404 to the client
                }
                
            }
            catch
            {
                return StatusCode(500);//returns a reponse code 400 to the client
            }
        }



        // POST api/Request
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post([FromBody]Request request)
        {
            if (request.EmpCode==null|| request.RequestedBy==null|request.BuildingCode==null||request.CcCode==null||request.Entity==null||request.LocationCode==null)
            {
                return NotFound();
            }
            else
            {
                  try
            {
                _requestService.Add(request);
                return Ok();// produces a response code of 200
            }
            catch
            {
                return StatusCode(500);
            }
            }
         
        }

        // PUT api/Request/5
        [HttpPut]
        [Route("api/[controller]/{id}")]
        public IActionResult Put(int id, [FromBody]Request value)
        {
            if (value==null)
            {
                return NoContent();// returns a status code of 404
            }
            try
            {
                _requestService.Update(id, value);
                return Ok();// returns a reponse code of 200
            }
            catch
            {
                return StatusCode(500);
   
            }
           

        }

        // DELETE api/Request/5
        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _requestService.Delete(id);
                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
