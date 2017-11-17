using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SeatAllocationWebApi.Services;
using SeatAllocationWebApi.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SeatAllocationWebApi.Controllers
{
    [Route("api/[controller]")]
    public class ReleaseController : Controller
    {
        private IReleaseService _releaseService;
        public ReleaseController(IReleaseService releaseService)
        {
            _releaseService = releaseService;
        }

        // GET: api/Release
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Release/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/Release
        //[HttpPost]
        //public IActionResult  Post([FromBody]RequestRelease req)
        //{

        //    //try
        //    //{
        //    //    _releaseService.Add(req);
        //    //    return Ok("success");
        //    //}
        //    //catch
        //    //{
        //    //    return Ok("internal server error");

        //    //}

        //}

        // PUT api/Release/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/Release/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
