using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SeatAllocationWebApi.Services;
using SeatAllocationWebApi.Model;

namespace SeatAllocationWebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        public ISeatAllocationServices _services;
        public ValuesController(ISeatAllocationServices services)
        {
            _services = services;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_services.GetAll());
            }
            catch (System.Exception)
            {

                return Ok("Internal Server Error");
            }
           
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok( _services.Getid(id));
            }
            catch (System.Exception)
            {

                return Ok("Internal Server Error");
            }
         
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Request value)
        {
            try
            {
                _services.Add(value);
                return Ok("Added Successfully");
                
            }
            catch (System.Exception)
            {
                return Ok("Server Not Responding");
            }
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Request value)
        {
            try
            {
               
                _services.Update(id, value);
                return Ok("Updated Successsfully");
            }
            catch (System.Exception)
            {

                return Ok("Internal Server error");
            }
           
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try

            {
                _services.delete(id);
                return Ok("Deleted Successfully");
            }
            catch (System.Exception)
            {

                return Ok("Internal Server Error   ");
            }
        
        }
    }
}
