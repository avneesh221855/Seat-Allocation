using Microsoft.AspNetCore.Mvc;
using Moq;
using SeatAllocationWebApi.Controllers;
using SeatAllocationWebApi.Model;
using SeatAllocationWebApi.Repository;
using SeatAllocationWebApi.Services;
using System;
using System.Collections.Generic;
using Xunit;

namespace SeatAllocationTest_Cases
{
    public class ApprovingAuthorityServiceTest
    {


        [Fact]
        public void request_service_get_method_to_get_all_request()
        {
            List<Request> requests = new List<Request>();
            var request = new Request();
            request.RequestId = 1;
            requests.Add(request);
            var mockrepo = new Mock<IRequestRepository>();
            var mockrepo2 = new Mock<ILocationStructureRepository>();
            mockrepo.Setup(x => x.GetAll()).Returns(requests);
            RequestService obj = new RequestService(mockrepo2.Object, mockrepo.Object);
            var res = obj.GetAll();
           
            Assert.NotNull(res);
            Assert.Equal(requests, res);
        }


        [Fact]
        public void request_service_put_method_to_get_all_request()
        {
            List<Request> requests = new List<Request>();
            var request = new Request();
            request.RequestId = 1;
            requests.Add(request);
            var mockrepo = new Mock<IRequestRepository>();
            var mockrepo2 = new Mock<ILocationStructureRepository>();
            mockrepo.Setup(x => x.GetAll()).Returns(requests);
            RequestService obj = new RequestService(mockrepo2.Object, mockrepo.Object);
            var res = obj.GetAll();
            Assert.IsType<List<Request>>(res);
            Assert.NotNull(res);
            Assert.Equal(requests, res);
        }


            













    }
}
    

